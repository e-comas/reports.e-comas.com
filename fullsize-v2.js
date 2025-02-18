function makeItFullSize() {
  var iframe = document.getElementsByTagName("iframe")[0];
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;
}

window.addEventListener("resize", makeItFullSize);
document.body.style.overflow = "hidden";
makeItFullSize();
