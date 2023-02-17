// Get the logo element by id
var logo = document.getElementById("logo");

// Get the current mode from local storage or set it to dark by default
var mode = localStorage.getItem("mode") || "dark";

// Set the logo src according to the mode
logo.src = mode === "light" ? "./img/logo/black-logo.png" : "./img/logo/white-logo.png";


// Add a click event listener to toggle between modes and change the logo src
icon.addEventListener("click", function() {
  // Toggle between light and dark modes
  mode = mode === "light" ? "dark" : "light";
  // Save the mode in local storage
  localStorage.setItem("mode", mode);
  // Change the logo src according to the new mode
  logo.src = mode === "light" ? "./img/logo/black-logo.png" : "./img/logo/white-logo.png";
});