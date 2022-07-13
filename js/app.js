import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

const gallery = document.getElementById("gallery-container");

lightGallery(gallery, {
  speed: 500,
  plugins: [lgVideo],
  mode: "lg-fade",
  loadYouTubePoster: true,
});
