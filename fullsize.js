function makeItFullSize() {
  var iframe = document.getElementsByTagName("iframe")[0];
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;
}

document.addEventListener("DOMContentLoaded", makeItFullSize, { once: true });
document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.body.style.overflow = "hidden";
  },
  { once: true }
);
window.addEventListener("resize", makeItFullSize);
