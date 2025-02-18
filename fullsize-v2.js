// Function to resize and position the iframe to cover the entire viewport
function makeItFullSize() {
  var iframe = document.getElementById("reportFrame");
  if (iframe) {
    // Set the width and height based on the window's dimensions
    iframe.style.width = window.innerWidth + "px";
    iframe.style.height = window.innerHeight + "px";
    // Ensure the iframe is positioned at the top-left corner
    iframe.style.top = "0";
    iframe.style.left = "0";
  }
}

// Resize the iframe on window resize and once the page is fully loaded
window.addEventListener("resize", makeItFullSize);
window.addEventListener("load", makeItFullSize);
