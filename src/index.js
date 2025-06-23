document.addEventListener("DOMContentLoaded", () => {
  const postList = document.getElementById("post-list");
  const postDetail = document.getElementById("post-detail");
  const newPostForm = document.getElementById("new-post-form");
  const editPostForm = document.getElementById("edit-post-form");

  // Load posts on page load
  fetchPosts();

  // Fetch all posts and render them as cards
  function fetchPosts() {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((posts) => {
        postList.innerHTML = "";
        posts.forEach(renderPostCard);
      })
      .catch((err) => {
        postList.innerHTML = `<p style="color:red;">Error loading posts</p>`;
        console.error("Error fetching posts:", err);
      });
  }

  // Create and append a post card
  function renderPostCard(post) {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");

    postCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="card-image">
      <h3>${post.title}</h3>
      <p>${post.content.substring(0, 100)}...</p>
      <div class="post-buttons">
        <button class="view-btn">View</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    postCard.querySelector(".view-btn").addEventListener("click", () => viewPost(post.id));
    postCard.querySelector(".edit-btn").addEventListener("click", () => showEditForm(post));
    postCard.querySelector(".delete-btn").addEventListener("click", () => deletePost(post.id));

    postList.appendChild(postCard);
  }

  // Show full post in detail view
  function viewPost(id) {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((post) => {
        postDetail.innerHTML = `
          <h2>${post.title}</h2>
          <img src="${post.image}" alt="${post.title}" class="detail-image">
          <p>${post.content}</p>
          <p><strong>Author:</strong> ${post.author}</p>
        `;
      })
      .catch((err) => {
        postDetail.innerHTML = `<p style="color:red;">Error loading post</p>`;
        console.error(err);
      });
  }

  // Handle Add New Post
  newPostForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value.trim();
    const author = "Anonymous";

    if (!title || !content || !image) return alert("Please fill in all fields.");

    const newPost = { title, content, image, author };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(() => {
        newPostForm.reset();
        fetchPosts();
      })
      .catch((err) => {
        console.error("Error adding post:", err);
        alert("Failed to add post.");
      });
  });

  // Show and handle Edit Post
  function showEditForm(post) {
    editPostForm.classList.remove("hidden");
    document.getElementById("edit-title").value = post.title;
    document.getElementById("edit-content").value = post.content;
    document.getElementById("edit-image").value = post.image;

    editPostForm.onsubmit = function (e) {
      e.preventDefault();

      const updatedPost = {
        title: document.getElementById("edit-title").value.trim(),
        content: document.getElementById("edit-content").value.trim(),
        image: document.getElementById("edit-image").value.trim(),
      };

      fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      })
        .then((res) => res.json())
        .then(() => {
          editPostForm.classList.add("hidden");
          fetchPosts();
          viewPost(post.id);
        })
        .catch((err) => {
          console.error("Error updating post:", err);
          alert("Failed to update post.");
        });
    };

    document.getElementById("cancel-edit").addEventListener("click", () => {
      editPostForm.classList.add("hidden");
    });
  }

  // Handle delete
  function deletePost(id) {
    if (!confirm("Are you sure you want to delete this post?")) return;

    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchPosts();
        postDetail.innerHTML = "<p>Select a post to view details</p>";
      })
      .catch((err) => {
        console.error("Error deleting post:", err);
        alert("Failed to delete post.");
      });
  }
});

