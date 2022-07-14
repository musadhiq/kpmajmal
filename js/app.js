import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

const gallery = document.getElementById("animation-container");

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

// Animations
lightGallery(gallery, {
  speed: 500,
  plugins: [lgVideo],
  mode: "lg-fade",
  loadYouTubePoster: true,
});

// Models

lightGallery(document.getElementById("model-container"), {
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: false,
  toggleThumb: true,
});
