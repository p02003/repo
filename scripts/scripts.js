document.addEventListener("DOMContentLoaded", function () {
  // Change welcome text button
  document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.querySelector("#home p").textContent = "Thanks for checking out my dev profile!";
  });

  const navMap = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  // On nav link click, show the matching section and hide others
  Object.keys(navMap).forEach(navId => {
    document.getElementById(navId).addEventListener("click", () => {
      Object.values(navMap).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.classList.remove("active");
        }
      });
      Object.keys(navMap).forEach(nid => {
        const navLink = document.getElementById(nid);
        if (navLink) {
          navLink.classList.remove("active");
        }
      });

      document.getElementById(navMap[navId]).classList.add("active");
      document.getElementById(navId).classList.add("active");
    });
  });

  // Show home section by default
  document.getElementById("home").classList.add("active");
  document.getElementById("nav-home").classList.add("active");
});
