document.addEventListener("DOMContentLoaded", function () {
  const navLinks = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  // Navigation logic
  Object.keys(navLinks).forEach(id => {
    document.getElementById(id).addEventListener("click", function (event) {
      event.preventDefault();
      // Hide all sections
      Object.values(navLinks).forEach(sec => {
        document.getElementById(sec).style.display = "none";
      });

      // Remove active class from all nav items
      Object.keys(navLinks).forEach(nid => {
        document.getElementById(nid).classList.remove("active");
      });

      // Show clicked section
      const sectionId = navLinks[id];
      document.getElementById(sectionId).style.display = "block";
      document.getElementById(id).classList.add("active");
    });
  });

  // Button to change text on homepage
  document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.querySelector("#home p").textContent = "Thanks for visiting my Dev Profile!";
  });

  // Button to open Blog Admin
  const openBlogBtn = document.getElementById("openBlogAdminBtn");
  if (openBlogBtn) {
    openBlogBtn.addEventListener("click", () => {
      window.open("https://p02003.github.io/blog-admin/", "_blank");
    });
  }
});
