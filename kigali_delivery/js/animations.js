document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({ easing: "easeOutExpo" })
    .add({ targets: "#navMain", translateX: [-500, 0] })
    .add({ targets: ".navbar-header", opacity: [0.8, 1], rotate: "1turn" });
}),
  anime({
    targets: [".main-phone", ".slogan-sm-title"],
    translateX: [-500, -0],
    easing: "easeOutExpo",
  }),
  (function (t) {
    "use strict";
    jQuery("[data-toggle='tooltip']").tooltip({ container: "body" });
  })();
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (t) {
  t.offsetWidth > docWidth && console.log(t);
});
