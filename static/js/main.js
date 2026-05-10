// Marks the current nav link as active based on the URL path
(function () {
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  links.forEach(function (link) {
    if (link.getAttribute("href") === window.location.pathname) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();
