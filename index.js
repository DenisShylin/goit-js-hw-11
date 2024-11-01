import{S as c,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function l(s){const t="46842310-1eff6901abe3b896058131b9e",o="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=await fetch(`${o}?${i}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}function u({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:a}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img 
          class="gallery-image" 
          src="${s}" 
          alt="${o}"
          loading="lazy"
        />
        <div class="image-info">
          <p class="info-item"><b>Likes:</b> ${i}</p>
          <p class="info-item"><b>Views:</b> ${e}</p>
          <p class="info-item"><b>Comments:</b> ${r}</p>
          <p class="info-item"><b>Downloads:</b> ${a}</p>
        </div>
      </a>
    </li>
  `}function f(s,t){const o=s.map(u).join("");t.innerHTML=o}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".search-form"),t=document.querySelector(".gallery"),o=document.querySelector(".loader");let i=new c(".gallery a",{captionsData:"alt",captionDelay:250});s.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}try{o.style.display="flex",t.innerHTML="";const a=await l(r);if(a.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(a.hits,t),i.refresh()}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{o.style.display="none",s.reset()}})});
//# sourceMappingURL=index.js.map
