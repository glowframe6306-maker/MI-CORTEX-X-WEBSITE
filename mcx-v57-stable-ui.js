(function(){
  "use strict";
  if(window.__MCX_V57_STABLE_UI__) return;
  window.__MCX_V57_STABLE_UI__=true;

  function normalizeRoute(){
    var h=String(location.hash||"");
    if(h===""||h==="#"||h==="#/"){
      history.replaceState(null,"",location.pathname+location.search+"#/overview");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  function recover(){
    var root=document.documentElement, body=document.body;
    ["mcx-v19-front-page","mcx-v50-active","mcx-v51-active","mcx-v52-active","mcx-v53-active","mcx-v54-active","mcx-v55-active","mcx-v56-active"].forEach(function(c){root.classList.remove(c)});
    root.classList.add("mcx-v19-inner-page");
    body.classList.remove("intro-active");
    root.style.removeProperty("overflow"); body.style.removeProperty("overflow");

    ["welcome-screen","mi-neural-intro"].forEach(function(id){
      var e=document.getElementById(id);
      if(e){e.hidden=true;e.setAttribute("aria-hidden","true");}
    });

    document.querySelectorAll(".reveal").forEach(function(e){e.classList.add("is-visible")});

    var header=document.querySelector(".site-header");
    if(header){
      header.style.removeProperty("display");
      header.style.removeProperty("opacity");
      header.style.removeProperty("visibility");
      header.style.removeProperty("transform");
    }
  }

  function run(){normalizeRoute();recover();setTimeout(recover,50);setTimeout(recover,500)}
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",run,{once:true}); else run();
  window.addEventListener("pageshow",run);
})();
