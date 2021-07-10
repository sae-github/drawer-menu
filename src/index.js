const js_hamburger = document.getElementById("js-hamburger");
const js_globalNav = document.getElementById("js-global-nav");

js_hamburger.addEventListener("click",function () {

  js_globalNav.classList.toggle("is-active");
  if (this.getAttribute("aria-expanded") === "false") {
    this.setAttribute("aria-expanded", "true");
    js_globalNav.setAttribute("aria-hidden", "false");
  } else {
    this.setAttribute("aria-expanded", "false");
    js_globalNav.setAttribute("aria-hidden", "true");
  }
});

