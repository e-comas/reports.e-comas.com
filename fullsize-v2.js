console.log("fullsize.js loaded");
// Function to resize and position the iframe to cover the entire viewport
function makeItFullSize() {
  var iframe = document.getElementsByTagName("iframe")[0];
  console.log("Before resizing:");
  console.log("  window.innerWidth:", window.innerWidth);
  console.log("  window.innerHeight:", window.innerHeight);
  console.log("  Current iframe width attribute:", iframe.getAttribute('width'));
  console.log("  Current iframe height attribute:", iframe.getAttribute('height'));

  // Set the dimensions using properties (and later we can try CSS)
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;

  console.log("After resizing:");
  console.log("  New iframe width attribute:", iframe.width);
  console.log("  New iframe height attribute:", iframe.height);
}

window.addEventListener("resize", makeItFullSize);
document.body.style.overflow = "hidden";
makeItFullSize();

// Resize the iframe on window resize and once the page is fully loaded
window.addEventListener("resize", makeItFullSize);
window.addEventListener("load", makeItFullSize);
