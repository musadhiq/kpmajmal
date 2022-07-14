import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

const gallery = document.getElementById("animation-container");
const models = document.getElementById("model-container");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-container");

tabBtn.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btnTarget = el.currentTarget;
  var tab = btnTarget.dataset.tab;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabBtn.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector(`#${tab}`).classList.add("active");

  btnTarget.classList.add("active");
}

const closeIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>cancel-circle</title>
<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
<path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
</svg>`;

models.addEventListener("lgInit", () => {
  const $lgCloseIcon = document.querySelector(".lg .lg-close");
  $lgCloseIcon.insertAdjacentHTML("beforeend", closeIcon);
});
// Animations
lightGallery(gallery, {
  speed: 500,
  plugins: [lgVideo],
  mode: "lg-fade",
  loadYouTubePoster: true,
});

// Models

lightGallery(models, {
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: false,
  toggleThumb: true,
});
