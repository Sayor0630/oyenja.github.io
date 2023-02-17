const navLinks = document.querySelectorAll("nav ul li a");
const currentUrl = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add("active");
  }
});
