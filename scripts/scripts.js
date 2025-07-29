document.addEventListener("DOMContentLoaded", function () {
  // Change welcome text
  document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.querySelector("#home p").textContent = "Thanks for checking out my dev profile!";
  });

  // Navigation toggle logic
  const navMap = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  Object.keys(navMap).forEach(navId => {
    document.getElementById(navId).addEventListener("click", () => {
      Object.values(navMap).forEach(secId => {
        document.getElementById(secId).classList.remove("active");
      });
      Object.keys(navMap).forEach(id => {
        document.getElementById(id).classList.remove("active");
      });

      document.getElementById(navMap[navId]).classList.add("active");
      document.getElementById(navId).classList.add("active");
    });
  });
});
