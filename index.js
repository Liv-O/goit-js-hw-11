import{a as f,S as y,i as g}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function h(t){const o="52541009-8475ad66b76bd384e4dad34fd",a=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return f.get(`https://pixabay.com/api/?${a}`)}function p(t){const o=document.querySelector(".gallery"),a=t.map(({webformatURL:e,largeImageURL:r,tags:s,views:c,likes:u,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
           <img
              class="gallery-image"
              src="${e}"
              alt="${s}"
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
          <td>${c}</td>
          <td>${d}</td>
          <td>${m}</td>
         </tr>
        </table>
       </li>`).join("");o.innerHTML=a;let n=new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});n.on("show.simplelightbox",function(e){console.log(`opened image : ${e.target.querySelector("img").alt} :) `)}),n.refresh()}function l(){const t=document.querySelector(".gallery");t.innerHTML=""}function L(){const t=document.querySelector(".gallery");t.innerHTML='<span class="loader"></span>'}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}const S=document.querySelector(".form"),q=document.querySelector("input");let i;const w=function(t){t.preventDefault(),i=t.target.elements["search-text"].value.toLowerCase().trim(),i===""?alert("Fill your answer"):(q.value="",L(),setTimeout(()=>{h(i).then(o=>{b(),o.data.hits.length===0?(g.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l()):p(o.data.hits)}).catch(o=>{console.log(o),l()})},2e3))};S.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
