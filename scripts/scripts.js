document.addEventListener("DOMContentLoaded", function () {
  const navMap = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  function showSection(sectionId) {
    Object.values(navMap).forEach(sec => {
      document.getElementById(sec).style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
  }

  function setActiveNav(navId) {
    Object.keys(navMap).forEach(id => {
      document.getElementById(id).classList.remove("active");
    });
    document.getElementById(navId).classList.add("active");
  }

  // Initialize page
  showSection("home");
  setActiveNav("nav-home");

  // Attach event handlers to nav links
  Object.keys(navMap).forEach(navId => {
    document.getElementById(navId).addEventListener("click", (event) => {
      event.preventDefault();
      showSection(navMap[navId]);
      setActiveNav(navId);
    });
  });

  // Change Text Button on Home section
  document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.querySelector("#home p").textContent = "Thanks for checking out my dev profile!";
  });

  // Blog Admin button
  document.getElementById("openBlogAdminBtn").addEventListener("click", () => {
    window.open("https://p02003.github.io/blog-admin/", "_blank");
  });
});
