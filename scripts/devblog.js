document.addEventListener("DOMContentLoaded", function () {
  const blogPostsDiv = document.getElementById("blogPosts");
  const jsonURL = "https://p02003.github.io/blog-data/blogdata.json";

  fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "mb-4 p-3 border rounded bg-light";
        postDiv.innerHTML = `
          <h4>${post.title}</h4>
          <small class="text-muted">${post.date}</small>
          <p>${post.content}</p>
          ${post.tags ? `<p><strong>Tags:</strong> ${post.tags.join(", ")}</p>` : ""}
        `;
        blogPostsDiv.appendChild(postDiv);
      });
    })
    .catch(err => {
      blogPostsDiv.innerHTML = "<p class='text-danger'>Could not load blog posts. Please check your data.</p>";
      console.error("Error fetching blog data:", err);
    });
});
