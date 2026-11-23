(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (dark ? "dark" : "light"));
})();
