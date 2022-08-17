const navToggle = document.getElementById("mobile-nav-toggle");
const primaryNav = document.getElementById("nav-wrapper");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("hidden-mobile");
  document.body.classList.toggle("overflow-hidden");
});
