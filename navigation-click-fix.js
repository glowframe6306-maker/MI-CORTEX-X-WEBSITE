(function () {
 "use strict";

 if (window.__mcxNavigationClickFixInstalled) {
 return;
 }

 window.__mcxNavigationClickFixInstalled = true;

 var validPages = [
 "overview",
 "home",
 "about",
 "products",
 "services",
 "pricing",
 "contact"
 ];

 function normalizePage(value) {
 var page = String(value || "").trim().toLowerCase();
 return validPages.indexOf(page)!== -1? page: "overview";
 }

 function fixedNavigationOffset() {
 var header = document.querySelector(".site-header");

 if (!header) {
 return 22;
 }

 return Math.max(22, Math.ceil(header.getBoundingClientRect().height) + 22);
 }

 function showPageFallback(page, shouldScroll) {
 var sections = document.querySelectorAll("[data-mcx-page]");
 var target = document.querySelector('[data-mcx-page="' + page + '"]');

 if (!target) {
 return;
 }

 sections.forEach(function (section) {
 var active = section.getAttribute("data-mcx-page") === page;
 section.hidden =!active;
 section.classList.toggle("active", active);
 });

 document.querySelectorAll("[data-mcx-category-index], [data-mcx-category-detail]").forEach(function (panel) {
 panel.hidden = true;
 panel.innerHTML = "";
 });

 document.querySelectorAll("[data-mcx-page-link]").forEach(function (link) {
 var active = link.getAttribute("data-mcx-page-link") === page;
 link.classList.toggle("active", active);
 if (active) {
 link.setAttribute("aria-current", "page");
 } else {
 link.removeAttribute("aria-current");
 }
 });

 document.documentElement.classList.remove("mcx-hide-content-navigation");

 if (shouldScroll!== false) {
 var top = target.getBoundingClientRect().top + window.scrollY - fixedNavigationOffset();
 window.scrollTo({
 top: Math.max(0, top),
 left: 0,
 behavior: "smooth"
 });
 }
 }

 function openPage(page) {
 page = normalizePage(page);
 var nextHash = "#" + page;

 document.documentElement.classList.remove("mcx-hide-content-navigation");

 if (window.location.hash === nextHash) {
 window.dispatchEvent(new HashChangeEvent("hashchange"));
 } else {
 window.location.hash = nextHash;
 }

 window.setTimeout(function () {
 var target = document.querySelector('[data-mcx-page="' + page + '"]');
 if (!target || target.hidden ||!target.classList.contains("active")) {
 showPageFallback(page, true);
 return;
 }

 var top = target.getBoundingClientRect().top + window.scrollY - fixedNavigationOffset();
 window.scrollTo({
 top: Math.max(0, top),
 left: 0,
 behavior: "smooth"
 });
 }, 40);
 }

 document.addEventListener(
 "click",
 function (event) {
 var link = event.target.closest(".site-header [data-mcx-page-link],.site-header a[href^='#']");

 if (!link) {
 return;
 }

 var page = link.getAttribute("data-mcx-page-link");

 if (!page) {
 page = (link.getAttribute("href") || "").replace(/^#\/?/, "").split("/")[0];
 }

 page = normalizePage(page);

 event.preventDefault();
 event.stopPropagation();
 event.stopImmediatePropagation();
 openPage(page);
 },
 true
 );

 window.addEventListener("hashchange", function () {
 var page = normalizePage(
 window.location.hash.replace(/^#\/?/, "").split("/")[0]
 );

 window.setTimeout(function () {
 var target = document.querySelector('[data-mcx-page="' + page + '"]');
 if (target && (target.hidden ||!target.classList.contains("active"))) {
 showPageFallback(page, false);
 }
 }, 80);
 });
})();

document.addEventListener("keydown", function(e){

 if(
 e.key === "Enter" &&
 e.target &&
 (
 e.target.tagName === "INPUT" ||
 e.target.tagName === "TEXTAREA"
 )
 ){

 e.preventDefault();

 }

});
