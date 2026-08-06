(function(){
"use strict";
if(window.__MCX_V50__)return;window.__MCX_V50__=true;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const mk=c=>{const e=document.createElement("div");e.className=c;e.setAttribute("aria-hidden","true");return e};
function build(w,n){
 if(!w.dataset.v50){w.dataset.v50="1";w.append(mk("mcx-v50-bg"),mk("mcx-v50-curtain mcx-v50-left"),mk("mcx-v50-curtain mcx-v50-right"))}
 if(!n.dataset.v50){n.dataset.v50="1";n.append(mk("mcx-v50-aurora"),mk("mcx-v50-wave"));const p=mk("mcx-v50-particles");
 for(let i=0;i<48;i++){const e=mk("mcx-v50-particle");e.style.left=(6+(i*19)%88)+"%";e.style.top=(7+(i*31)%84)+"%";e.style.setProperty("--d",(4+(i%7)*.6)+"s");e.style.setProperty("--delay",(-.42*(i%11))+"s");e.style.setProperty("--x",(((i%9)-4)*6)+"px");p.append(e)}n.append(p);
 const b=mk("mcx-v50-brand"),name=mk("mcx-v50-name"),pts=mk("mcx-v50-points");name.textContent="MI CORTEX X INC.";pts.innerHTML='<span>INTELLIGENCE</span><span class="mcx-v50-dot">•</span><span>INNOVATION</span><span class="mcx-v50-dot">•</span><span>INFINITY</span>';b.append(name,pts);n.append(b)}
}
async function run(){
 const r=document.documentElement,b=document.body,w=document.getElementById("welcome-screen"),n=document.getElementById("mi-neural-intro");
 if(!w||!n||n.dataset.v50Started)return;n.dataset.v50Started="1";build(w,n);r.classList.add("mcx-v50-active");b.classList.add("intro-active");w.hidden=false;n.hidden=false;
 await sleep(350);w.classList.add("mcx-v50-unblur");await sleep(5600);
 n.classList.add("mcx-v50-show");w.classList.add("mcx-v50-open");await sleep(2900);w.classList.add("mcx-v50-hidden");
 await sleep(2300);n.classList.remove("mcx-v50-show");n.classList.add("mcx-v50-logo");await sleep(4300);
 n.classList.remove("mcx-v50-logo");n.classList.add("mcx-v50-logo-out");await sleep(1500);
 n.classList.remove("mcx-v50-logo-out");n.classList.add("mcx-v50-hold");await sleep(2500);
 n.classList.remove("mcx-v50-hold");void n.offsetHeight;n.classList.add("mcx-v50-lift");await sleep(3500);
 n.classList.add("mcx-v50-done");r.classList.remove("mcx-v50-active");b.classList.remove("intro-active")
}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>run().catch(console.error),{once:true}):run().catch(console.error)
})();
