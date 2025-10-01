import{a as f,S as h,i as l}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function y(t){const r="52541009-8475ad66b76bd384e4dad34fd",a=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return f.get(`https://pixabay.com/api/?${a}`).then(s=>s.data.hits).catch(s=>{throw s})}let n;function g(t){const r=document.querySelector(".gallery"),a=t.map(({webformatURL:s,largeImageURL:e,tags:o,views:i,likes:u,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
           <img
              class="gallery-image"
              src="${s}"
              alt="${o}"
            />
        </a>
        <table class="gallery-item-desc">
         <tr>
          <th>Likes</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Downloads</th>
         </tr>
         <tr>
          <td>${u}</td>
          <td>${i}</td>
          <td>${d}</td>
          <td>${m}</td>
         </tr>
        </table>
       </li>`).join("");r&&(r.innerHTML=a,n?n.refresh():n=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),n.on("show.simplelightbox",function(s){console.log(`opened image : ${s.target.querySelector("img").alt} :) `)}))}function p(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function L(){const t=document.querySelector(".loader");t&&t.classList.remove("hidden")}function S(){const t=document.querySelector(".loader");t&&t.classList.add("hidden")}const b=document.querySelector(".form"),q=document.querySelector("input");let c;const w=function(t){t.preventDefault(),c=t.target.elements["search-text"].value.toLowerCase().trim(),c===""?l.error({message:"Fill your answer"}):(q.value="",L(),p(),y(c).then(r=>{r.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):g(r)}).catch(r=>{l.error({message:`Sorry, ${r}`})}).finally(()=>{S()}))};b.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
