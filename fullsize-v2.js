// Function to resize the iframe to match the window's dimensions
function makeItFullSize() {
  var iframe = document.getElementById("reportFrame");
  if (iframe) {
    iframe.style.width = window.innerWidth + "px";
    iframe.style.height = window.innerHeight + "px";
  }
}

// Resize iframe on window resize and when the window has fully loaded
window.addEventListener("resize", makeItFullSize);
window.addEventListener("load", makeItFullSize);
