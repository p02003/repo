document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blogPosts");

  fetch("https://p02003.github.io/blog-data/blogdata.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      return response.json();
    })
    .then(posts => {
      if (!Array.isArray(posts) || posts.length === 0) {
        blogContainer.innerHTML = "<p>No blog posts available.</p>";
        return;
      }

      blogContainer.innerHTML = "";

      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("mb-4", "p-3", "border", "rounded", "shadow-sm", "bg-white");

        const title = document.createElement("h4");
        title.textContent = post.title || "Untitled";

        const date = document.createElement("small");
        date.textContent = post.date || "";

        const content = document.createElement("p");
        content.textContent = post.content || "";

        postDiv.appendChild(title);
        postDiv.appendChild(date);
        postDiv.appendChild(content);

        blogContainer.appendChild(postDiv);
      });
    })
    .catch(err => {
      blogContainer.innerHTML = `<p>Error loading blog posts: ${err.message}</p>`;
    });
});
