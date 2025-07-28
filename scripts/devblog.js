document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blogPosts");

  fetch("https://p02003.github.io/blog-data/blogdata.json")
    .then((response) => response.json())
    .then((data) => {
      blogPostsContainer.innerHTML = "";
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("mb-4", "p-3", "border", "rounded", "bg-light");
        postElement.innerHTML = `
          <h4>${post.title}</h4>
          <p><em>${post.date}</em></p>
          <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      blogPostsContainer.innerHTML = "<p>Error loading blog posts.</p>";
      console.error("Error:", error);
    });
});
