import{a as m,S as f,i as h}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(o){const r="52541009-8475ad66b76bd384e4dad34fd",a=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return m.get(`https://pixabay.com/api/?${a}`)}function g(o){const r=document.querySelector(".gallery"),a=o.map(({webformatURL:e,largeImageURL:t,tags:i,views:l,likes:c,comments:d,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
           <img
              class="gallery-image"
              src="${e}"
              alt="${i}"
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
          <td>${c}</td>
          <td>${l}</td>
          <td>${d}</td>
          <td>${u}</td>
         </tr>
        </table>
       </li>`).join("");r.innerHTML=a;let s=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});s.on("show.simplelightbox",function(e){console.log(`opened image : ${e.target.querySelector("img").alt} :) `)}),s.refresh()}function p(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const S=document.querySelector(".form"),q=document.querySelector("input");let n;const w=function(o){o.preventDefault(),n=o.target.elements["search-text"].value.toLowerCase().trim(),n===""?alert("Fill your answer"):(q.value="",L(),p(),setTimeout(()=>{y(n).then(r=>{b(),r.data.hits.length===0?h.error({message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.data.hits)}).catch(r=>{console.log(r)})},2e3))};S.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
