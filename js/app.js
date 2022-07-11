import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

const gallery = document.getElementById("gallery-container");

lightGallery(gallery, {
  speed: 500,
  plugins: [lgVideo],
});

let data = [
  {
    id: "1",
    vdo_id: "kjnoAe284hk",
    main: true,
  },
  {
    id: "2",
    vdo_id: "r5X_6vaz630",
  },
  {
    id: "3",
    vdo_id: "Vw8XpopGRGM",
  },
  {
    id: "4",
    vdo_id: "T1zK3yPuXYM",
  },
  {
    id: "5",
    vdo_id: "Ijr8FhnaSl4",
  },
  {
    id: "6",
    vdo_id: "8_QetMELvIA",
  },
  {
    id: "9",
    vdo_id: "xbkmfhFVpBQ",
  },
  {
    id: "10",
    vdo_id: "eGXxZTnbmrU",
  },
  {
    id: "11",
    vdo_id: "rXoGwdxgGfE",
  },
  {
    id: "12",
    vdo_id: "Bv7myHSDfYM",
  },
  {
    id: "13",
    vdo_id: "nOYLzi_M6Bg",
  },
  {
    id: "15",
    vdo_id: "Z46MzETlJfY",
  },
  {
    id: "16",
    vdo_id: "wEax9KH_MaU",
  },
  {
    id: "17",
    vdo_id: "JTCN2H8rOHo",
  },
];

data.map((item) => {
  const hehe = `
  <a
  data-lg-size="1280-720"
  data-src="//www.youtube.com/watch?v=${item.vdo_id}"
  data-poster="https://img.youtube.com/vi/${item.vdo_id}/maxresdefault.jpg"
 >
  <img
    width="300"
    height="200"
    class="img-responsive"
    src="https://img.youtube.com/vi/${item.vdo_id}/maxresdefault.jpg"
  />
</a>

`;

  console.log(hehe);

  // let animation = document.createElement("a");
  // animation.setAttribute("data-lg-size", "1280-720");
  // animation.setAttribute(
  //   "data-src",
  //   `//www.youtube.com/watch?v=${item.vdo_id}`
  // );
  // animation.setAttribute(
  //   "data-poster",
  //   `https://img.youtube.com/vi/${item.vdo_id}/maxresdefault.jpg`
  // );
  // if (item.main === true) {
  //   animation.setAttribute("class", "main");
  // }
  // let dataHtml = `
  // <img
  // width="300px"
  // height="200px"
  //   class="img-responsive"
  //   src="https://img.youtube.com/vi/${item.vdo_id}/maxresdefault.jpg"
  // />`;
  // animation.innerHTML = dataHtml;

  // gallery.appendChild(animation);
});
