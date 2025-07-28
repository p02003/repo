document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blogPosts");

  fetch("https://p02003.github.io/blog-data/blogdata.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) {
        blogContainer.innerHTML = "<p>No blog posts available.</p>";
        return;
      }

      blogContainer.innerHTML = ""; // clear existing

      data.forEach(post => {
        // Create post elements
        const postEl = document.createElement("div");
        postEl.classList.add("mb-4", "border", "p-3", "rounded", "shadow-sm", "bg-white");

        const title = document.createElement("h4");
        title.textContent = post.title || "Untitled";

        const date = document.createElement("small");
        date.textContent = post.date || "";

        const content = document.createElement("p");
        content.textContent = post.content || "";

        postEl.appendChild(title);
        postEl.appendChild(date);
        postEl.appendChild(content);

        blogContainer.appendChild(postEl);
      });
    })
    .catch(error => {
      blogContainer.innerHTML = `<p>Error loading blog posts: ${error.message}</p>`;
    });
});
