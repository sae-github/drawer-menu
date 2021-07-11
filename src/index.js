const hamburger = document.getElementById("js-hamburger");
const globalNav = document.getElementById("js-global-nav");


hamburger.addEventListener("mouseover",function() {
  globalNav.style.willChange = "transform";
});
hamburger.addEventListener("mouseout",function() {
  globalNav.style.willChange = "";
});

hamburger.addEventListener("click",function () {
  globalNav.classList.toggle("is-active");
  if (globalNav.classList.contains("is-active")) {

    this.setAttribute("aria-expanded", "true");
    globalNav.setAttribute("aria-hidden", "false");
  } else {
    this.setAttribute("aria-expanded", "false");
    globalNav.setAttribute("aria-hidden", "true");
  }
});
