document.addEventListener("DOMContentLoaded", function () {
  // Navigation mapping
  const navMap = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  // Show only the selected section, hide others
  function showSection(sectionId) {
    Object.values(navMap).forEach(secId => {
      document.getElementById(secId).style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
  }

  // Update active nav link
  function setActiveNav(navId) {
    Object.keys(navMap).forEach(id => {
      document.getElementById(id).classList.remove("active");
    });
    document.getElementById(navId).classList.add("active");
  }

  // Set initial visible section
  showSection("home");
  setActiveNav("nav-home");

  // Add click event listeners for nav items
  Object.keys(navMap).forEach(navId => {
    document.getElementById(navId).addEventListener("click", (e) => {
      e.preventDefault();
      showSection(navMap[navId]);
      setActiveNav(navId);
    });
  });

  // Change Text Button on Home
  document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.querySelector("#home p").textContent = "Thanks for checking out my dev profile!";
  });

  // Blog Admin button
  const openBlogBtn = document.getElementById("openBlogAdminBtn");
  openBlogBtn.addEventListener("click", () => {
    window.open("https://p02003.github.io/blog-admin/", "_blank");
  });
});
