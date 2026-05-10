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

// Navbar toggle — works with Bootstrap JS when available, falls back to
// vanilla JS when the CDN bundle fails to load (e.g. on mobile networks).
(function () {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.getElementById("navbarNav");
  if (!toggler || !menu) return;

  toggler.addEventListener("click", function () {
    // Bootstrap JS handles this via data-bs-* attributes when loaded;
    // only take over when the bootstrap global is absent.
    if (typeof bootstrap !== "undefined") return;
    const isOpen = menu.classList.contains("show");
    menu.classList.toggle("show", !isOpen);
    toggler.setAttribute("aria-expanded", String(!isOpen));
  });
})();
