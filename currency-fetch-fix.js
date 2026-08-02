(function () {
  "use strict";

  if (window.__mcxCurrencyFetchFixInstalled) {
    return;
  }

  window.__mcxCurrencyFetchFixInstalled = true;

  var nativeFetch = window.fetch.bind(window);

  function clearInvalidCachedRate() {
    try {
      var cachedRate = Number(
        localStorage.getItem("mcx-rate-value") || "0"
      );

      if (
        !Number.isFinite(cachedRate) ||
        cachedRate <= 0 ||
        cachedRate >= 1
      ) {
        localStorage.removeItem("mcx-rate-value");
        localStorage.removeItem("mcx-rate-timestamp");
      }
    } catch (error) {
      console.warn("Currency cache check failed.", error);
    }
  }

  async function fetchLkrUsdRate() {
    var sources = [
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json",
      "https://latest.currency-api.pages.dev/v1/currencies/lkr.json"
    ];

    var lastError = null;

    for (var index = 0; index < sources.length; index += 1) {
      try {
        var response = await nativeFetch(sources[index], {
          method: "GET",
          cache: "no-store",
          headers: {
            Accept: "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(
            "Currency source returned HTTP " + response.status
          );
        }

        var payload = await response.json();

        var rate = Number(
          payload &&
          payload.lkr &&
          payload.lkr.usd
        );

        if (
          !Number.isFinite(rate) ||
          rate <= 0 ||
          rate >= 1
        ) {
          throw new Error("Invalid LKR to USD rate.");
        }

        return {
          rate: rate,
          date:
            payload.date ||
            new Date().toISOString().slice(0, 10)
        };
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error("No currency source was available.");
  }

  window.fetch = async function (input, options) {
    var requestUrl =
      typeof input === "string"
        ? input
        : input && input.url
          ? input.url
          : "";

    var isLkrUsdRequest =
      requestUrl.indexOf("api.frankfurter.dev") !== -1 &&
      requestUrl.indexOf("base=LKR") !== -1 &&
      requestUrl.indexOf("symbols=USD") !== -1;

    if (!isLkrUsdRequest) {
      return nativeFetch(input, options);
    }

    try {
      var result = await fetchLkrUsdRate();

      return new Response(
        JSON.stringify({
          amount: 1,
          base: "LKR",
          date: result.date,
          rates: {
            USD: result.rate
          }
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store"
          }
        }
      );
    } catch (error) {
      console.error("LKR to USD conversion failed.", error);

      return new Response(
        JSON.stringify({
          error: "USD conversion temporarily unavailable."
        }),
        {
          status: 503,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store"
          }
        }
      );
    }
  };

  clearInvalidCachedRate();
})();