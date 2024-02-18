(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();const b="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20112.15%2069.52'%20style='enable-background:new%200%200%20112.15%2069.52;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M70.23,69.41c-8.83,0-17.67,0.33-26.47-0.16c-3.6-0.2-7.61-1.41-10.57-3.43c-9.06-6.19-17.76-12.93-26.5-19.59%20c-8.96-6.82-8.9-16.07,0.05-22.85c8.63-6.53,17.12-13.26,26.06-19.33c3.23-2.19,7.59-3.73,11.47-3.81%20C62.08-0.15,79.9,0.03,97.72,0.11c9.26,0.04,14.3,5.03,14.36,14.19c0.09,13.65,0.1,27.31,0.01,40.97%20c-0.06,9.17-5.12,14.09-14.38,14.14c-9.16,0.06-18.32,0.01-27.48,0.01C70.23,69.42,70.23,69.42,70.23,69.41z%20M70.15,33.61%20c0.12,0.84,0.24,1.69,0.36,2.53c-3,2.34-6.1,4.57-8.97,7.06c-2.24,1.94-5.15,4.35-2.25,7.46c3.35,3.58,5.63-0.1,7.73-2.19%20c2.67-2.65,5.06-5.58,8.58-9.53c3.7,4.31,6.44,7.65,9.35,10.83c1.77,1.93,3.96,3.54,6.39,1.05c2.36-2.42,0.96-4.64-1.05-6.43%20c-3.21-2.85-6.56-5.56-9.85-8.33c-0.07-0.88-0.14-1.75-0.22-2.63c3.22-2.58,6.51-5.08,9.64-7.77c2.11-1.81,4.06-4.12,1.6-6.79%20c-2.83-3.07-5.2-0.6-7.09,1.48c-2.78,3.06-5.27,6.39-8.92,10.89c-4.13-4.85-6.87-8.18-9.75-11.39c-1.76-1.96-4.29-3.78-6.2-0.99%20c-0.91,1.32-0.28,4.85,0.94,6.25C63.28,28.3,66.88,30.82,70.15,33.61z'/%3e%3c/g%3e%3c/svg%3e",m=document.getElementById("game"),u=document.getElementById("pop-up"),f=["perro","gato","portatil","programa","montaña","playa","silueta","natural","libro","musica"],d={correct:"letter-correct",present:"letter-present",incorrect:"letter-incorrect"},h=5;let s,p=0,o="";const w=()=>{const e="qwertyuiopasdfghjklñzxcvbnm",t=document.getElementById("keyboard");for(const c of e){const l=document.createElement("button");l.textContent=c.toUpperCase(),l.classList.add("keyboard__letter"),l.addEventListener("click",()=>k(c)),t.appendChild(l)}const r=document.createElement("button"),a=document.createElement("img");a.src=b,r.classList.add("keyboard__letter"),r.classList.add("keyboard__delete"),r.addEventListener("click",C),r.append(a),t.appendChild(r);const n=document.createElement("button");n.textContent="Enviar",n.classList.add("keyboard__letter"),n.classList.add("keyboard__send"),n.addEventListener("click",E),t.appendChild(n)},C=()=>{o.length>0&&(o=o.slice(0,-1),L())},v=()=>{const e=document.createDocumentFragment();for(let t=0;t<h;t++){const r=document.createElement("div");r.classList.add("game__row");for(let a=0;a<s.length;a++){const n=document.createElement("span");n.classList.add("letter"),r.append(n)}e.append(r)}m.append(e)},x=()=>{const e=Math.floor(Math.random()*f.length);s=f[e],v()},k=e=>{o+=e,L()},L=()=>{const e=m.children[p];if(o.length<=s.length){e.innerHTML="";for(let t=0;t<o.length;t++){const r=document.createElement("span");r.classList.add("letter"),r.textContent=o[t].toUpperCase(),e.appendChild(r)}for(let t=o.length;t<s.length;t++){const r=document.createElement("span");r.classList.add("letter"),e.appendChild(r)}}},_=()=>{o===s?(B(d.correct),g("¡Felicidades! ¡Has ganado!")):y()},y=()=>{p===h&&g(`Has alcanzado el límite de intentos. La palabra era: ${s}`)},g=e=>{u.textContent=e,u.classList.add("pop-up--show"),setTimeout(()=>{u.classList.remove("pop-up--show")},3e3)},B=e=>{for(let t=0;t<o.length;t++)i(e,t)},i=(e,t)=>{m.children[p].children[t].classList.add(e)},E=()=>{if(o.length!==s.length){g(`La palabra debe tener ${s.length} letras`);return}for(let e=0;e<o.length;e++){const t=o[e],r=s[e];t===r?i(d.correct,e):s.includes(t)?i(d.present,e):i(d.incorrect,e)}_(),p++,y(),o=""};x();w();document.addEventListener("keypress",e=>{e.key==="Enter"&&E()});document.addEventListener("keydown",e=>{e.key==="Enter"&&e.preventDefault()});
