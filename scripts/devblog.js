// scripts/devblog.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://p02003.github.io/blog-data/data.json")
    .then((response) => response.json())
    .then((blogPosts) => {
      const blogList = document.getElementById("devBlogList");
      blogPosts.forEach((post) => {
        const postEl = document.createElement("div");
        postEl.classList.add("card", "mb-3", "p-3");
        postEl.innerHTML = `
          <h5>${post.title}</h5>
          <small class="text-muted">${post.date}</small>
          <p>${post.content}</p>
        `;
        blogList.appendChild(postEl);
      });
    })
    .catch((err) => {
      console.error("Error loading blog data:", err);
    });
});
