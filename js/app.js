import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

const animations = document.getElementById("animation-container");
const models = document.getElementById("model-container");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-container");

// Animations
lightGallery(animations, {
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

// swap

function swapMain(el, parent, datas) {
  const randomElement = datas[Math.floor(Math.random() * datas.length)];
  randomElement.classList.add("main");
  parent.replaceChild(randomElement, el);
}

const modelEl = document.querySelector(".model-main");
const Modeldatas = models.children;

const animEl = document.querySelector(".anim-main");
const Animdatas = animations.children;

//swapMain(modelEl, models, Modeldatas);
//swapMain(animEl, animations, Animdatas);

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
