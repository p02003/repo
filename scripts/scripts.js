document.addEventListener("DOMContentLoaded", function () {
  // Change home text
  document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.querySelector("#home p").textContent = "Thanks for checking out my dev profile!";
  });

  // Navigation mapping
  const navMap = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  // Handle section switching
  Object.keys(navMap).forEach(navId => {
    const navLink = document.getElementById(navId);
    navLink.addEventListener("click", () => {
      // Hide all sections
      Object.values(navMap).forEach(sectionId => {
        document.getElementById(sectionId).classList.remove("active");
      });

      // Remove active from all nav
      Object.keys(navMap).forEach(id => {
        document.getElementById(id).classList.remove("active");
      });

      // Show current section and mark nav active
      document.getElementById(navMap[navId]).classList.add("active");
      navLink.classList.add("active");
    });
  });

  // Default home visible
  document.getElementById("home").classList.add("active");
  document.getElementById("nav-home").classList.add("active");
});
