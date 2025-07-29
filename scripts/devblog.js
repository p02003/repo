// scripts/devblog.js
fetch("https://p02003.github.io/blog-data/blogdata.json")
  .then(response => response.json())
  .then(data => {
    const blogContainer = document.getElementById("blogPosts");
    data.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("mb-4", "p-3", "border", "rounded", "bg-light");

      const title = document.createElement("h4");
      title.textContent = post.title;

      const date = document.createElement("small");
      date.textContent = `🗓 ${post.date}`;

      const content = document.createElement("p");
      content.textContent = post.content;

      const tags = document.createElement("p");
      tags.innerHTML = `<strong>Tags:</strong> ${post.tags.join(", ")}`;

      postDiv.appendChild(title);
      postDiv.appendChild(date);
      postDiv.appendChild(content);
      postDiv.appendChild(tags);

      blogContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    console.error("Failed to load blog data:", error);
  });
