document.addEventListener("DOMContentLoaded", function () {
  // Change welcome text button
  document.getElementById('changeTextBtn').addEventListener('click', function () {
    document.querySelector("#home p").textContent = "Thanks for checking out my dev profile!";
  });

  // Nav click functionality: show/hide sections and active link highlight
  const navMap = {
    "nav-home": "home",
    "nav-achievements": "achievements",
    "nav-blog": "blog",
    "nav-resources": "resources",
    "nav-contact": "contact"
  };

  Object.keys(navMap).forEach(navId => {
    document.getElementById(navId).addEventListener("click", () => {
      // Hide all sections
      Object.values(navMap).forEach(secId => {
        document.getElementById(secId).classList.remove("active");
      });
      // Remove all nav active
      Object.keys(navMap).forEach(id => {
        document.getElementById(id).classList.remove("active");
      });

      // Show clicked section & activate nav link
      document.getElementById(navMap[navId]).classList.add("active");
      document.getElementById(navId).classList.add("active");
    });
  });

  // Open Blog Admin app in new tab on button click
  const blogAdminBtn = document.getElementById("openBlogAdminBtn");
  if (blogAdminBtn) {
    blogAdminBtn.addEventListener("click", () => {
      window.open("https://p02003.github.io/blog-admin/", "_blank");
    });
  }

  // Load blog posts dynamically from JSON on page load
  const blogPostsDiv = document.getElementById("blogPosts");
  if (blogPostsDiv) {
    fetch("https://p02003.github.io/blog-data/blogdata.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        return response.json();
      })
      .then(posts => {
        if (!Array.isArray(posts) || posts.length === 0) {
          blogPostsDiv.innerHTML = "<p>No blog posts available.</p>";
          return;
        }

        blogPostsDiv.innerHTML = ""; // Clear loading text

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

          blogPostsDiv.appendChild(postDiv);
        });
      })
      .catch(err => {
        blogPostsDiv.innerHTML = `<p>Error loading blog posts: ${err.message}</p>`;
      });
  }
});
