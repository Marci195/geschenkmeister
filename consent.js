
(()=>{"use strict";
const KEY="geschenkmeister_analytics_consent",ID="G-KS58E7XWMR";
function load(){if(window.__gmAnalytics)return;window.__gmAnalytics=true;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",ID,{allow_google_signals:false,allow_ad_personalization_signals:false});const s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+ID;document.head.appendChild(s)}
function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
function close(){document.getElementById("cookie-consent")?.remove()}
function show(){if(document.getElementById("cookie-consent"))return;const x=document.createElement("section");x.id="cookie-consent";x.className="cookie-consent";x.setAttribute("role","dialog");x.innerHTML='<div class="cookie-inner"><div><strong>Datenschutz-Einstellungen</strong><div class="small">Google Analytics wird nur mit deiner Zustimmung geladen. Details findest du im Datenschutz.</div></div><div class="cookie-actions"><button class="btn" id="cookie-no">Ablehnen</button><button class="btn primary" id="cookie-yes">Akzeptieren</button></div></div>';document.body.appendChild(x);document.getElementById("cookie-yes").onclick=()=>{set("yes");close();load()};document.getElementById("cookie-no").onclick=()=>{set("no");close()}}
document.addEventListener("DOMContentLoaded",()=>{const v=get();if(v==="yes")load();else if(v!=="no")show();document.querySelectorAll("[data-cookie-settings]").forEach(a=>a.onclick=e=>{e.preventDefault();try{localStorage.removeItem(KEY)}catch(x){}location.reload()})});
})();
