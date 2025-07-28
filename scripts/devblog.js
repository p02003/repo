document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blogPosts");
  const blogAdminBtn = document.getElementById("openBlogAdminBtn");

  // Load blog data
  fetch("https://p02003.github.io/blog-data/blogdata.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "mb-4 p-3 border rounded bg-white shadow-sm";
        postDiv.innerHTML = `
          <h4>${post.title}</h4>
          <small class="text-muted">${post.date}</small>
          <p>${post.content}</p>
          <hr/>
        `;
        blogContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      blogContainer.innerHTML = "<p class='text-danger'>Failed to load blog data.</p>";
      console.error("Fetch error:", error);
    });

  // Blog Admin link
  blogAdminBtn.addEventListener("click", () => {
    window.open("https://p02003.github.io/blog-admin/", "_blank");
  });
});
