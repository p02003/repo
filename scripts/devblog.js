document.addEventListener("DOMContentLoaded", () => {
  const blogPostsContainer = document.getElementById("blogPosts");
  const blogAdminBtn = document.getElementById("openBlogAdminBtn");

  // Fetch blog data JSON and render posts dynamically
  fetch("https://p02003.github.io/blog-data/blogdata.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      blogPostsContainer.innerHTML = ""; // Clear container

      data.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("mb-4");

        const title = document.createElement("h5");
        title.textContent = post.title;

        const date = document.createElement("small");
        date.textContent = post.date;
        date.classList.add("text-muted");

        const content = document.createElement("p");
        content.textContent = post.content;

        postDiv.appendChild(title);
        postDiv.appendChild(date);
        postDiv.appendChild(content);

        blogPostsContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      blogPostsContainer.innerHTML = `<p class="text-danger">Error loading blog posts: ${error.message}</p>`;
    });

  // Open Blog Admin page in new tab
  blogAdminBtn.addEventListener("click", () => {
    window.open("https://p02003.github.io/blog-admin/", "_blank");
  });
});
