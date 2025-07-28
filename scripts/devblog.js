document.addEventListener("DOMContentLoaded", function () {
  const devBlogList = document.getElementById('devBlogList');

  fetch('https://p02003.github.io/blog-data/blogdata.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(post => {
        const div = document.createElement('div');
        div.className = "border p-3 mb-4 rounded bg-white shadow-sm";
        div.innerHTML = `
          <h4>${post.title}</h4>
          <small class="text-muted">${post.date}</small>
          <p>${post.content}</p>
          <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
        `;
        devBlogList.appendChild(div);
      });
    })
    .catch(err => {
      devBlogList.innerHTML = "<p class='text-danger'>Failed to load blog posts. Please try again later.</p>";
      console.error("Blog data fetch error:", err);
    });
});
