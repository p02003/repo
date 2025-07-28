document.addEventListener("DOMContentLoaded", function () {
  const navLinks = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  Object.keys(navLinks).forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
      Object.values(navLinks).forEach(sec => document.getElementById(sec).classList.remove("active"));
      Object.keys(navLinks).forEach(nid => document.getElementById(nid).classList.remove("active"));
      document.getElementById(navLinks[id]).classList.add("active");
      document.getElementById(id).classList.add("active");
    });
  });

  document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.querySelector("#home p").textContent = "Thanks for visiting my Dev Profile!";
  });
});
