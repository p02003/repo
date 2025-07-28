document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blogPosts");
  if (!blogPostsContainer) return;

  fetch("https://p02003.github.io/blog-data/blogdata.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // Clear container
      blogPostsContainer.innerHTML = "";

      // Loop through blog posts and create HTML for each
      data.forEach(post => {
        const postElem = document.createElement("article");
        postElem.classList.add("mb-4");

        postElem.innerHTML = `
          <h5>${post.title} <small class="text-muted">(${post.date})</small></h5>
          <p>${post.content}</p>
        `;

        blogPostsContainer.appendChild(postElem);
      });
    })
    .catch(error => {
      blogPostsContainer.innerHTML = `<p class="text-danger">Failed to load blog posts.</p>`;
      console.error("Fetching blog data failed:", error);
    });
});
