// src/index.js

document.addEventListener('DOMContentLoaded', main);

function main() {
  displayPosts();
  addNewPostListener();
}

function displayPosts() {
  fetch('http://localhost:3000/posts')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(posts => {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
      
      if (!posts || posts.length === 0) {
        postList.innerHTML = '<p>No posts available</p>';
        return;
      }

      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-item';
        
        // Create image element
        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.title;
        img.className = 'post-thumbnail';
        
        // Create title element
        const title = document.createElement('h3');
        title.textContent = post.title;
        
        postElement.appendChild(img);
        postElement.appendChild(title);
        
        postElement.addEventListener('click', () => handlePostClick(post.id));
        postList.appendChild(postElement);
      });

      // Display first post by default
      if (posts.length > 0) handlePostClick(posts[0].id);
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      document.getElementById('post-list').innerHTML = '<p>Error loading posts</p>';
    });
}

function handlePostClick(id) {
  fetch(`http://localhost:3000/posts/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(post => {
      const postDetail = document.getElementById('post-detail');
      postDetail.innerHTML = `
        <h2>${post.title}</h2>
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <p>${post.content}</p>
        <p class="author"><strong>Author:</strong> ${post.author}</p>
        <div class="post-actions">
          <button id="edit-btn">Edit</button>
          <button id="delete-btn">Delete</button>
        </div>
      `;

      document.getElementById('edit-btn').addEventListener('click', () => showEditForm(post));
      document.getElementById('delete-btn').addEventListener('click', () => deletePost(post.id));
    })
    .catch(error => {
      console.error('Error fetching post:', error);
      document.getElementById('post-detail').innerHTML = '<p>Error loading post details</p>';
    });
}

function addNewPostListener() {
  const form = document.getElementById('new-post-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;
    const author = "Anonymous"; // Default author

    const postObj = { title, content, image, author };

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postObj)
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to create post');
        return response.json();
      })
      .then(() => {
        form.reset();
        displayPosts();
      })
      .catch(error => {
        console.error('Error creating post:', error);
        alert('Failed to create post. Please try again.');
      });
  });
}

function showEditForm(post) {
  const form = document.getElementById('edit-post-form');
  form.classList.remove('hidden');
  
  document.getElementById('edit-title').value = post.title;
  document.getElementById('edit-content').value = post.content;
  document.getElementById('edit-image').value = post.image;

  form.onsubmit = function(event) {
    event.preventDefault();
    
    const updatedPost = {
      title: document.getElementById('edit-title').value,
      content: document.getElementById('edit-content').value,
      image: document.getElementById('edit-image').value
    };

    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to update post');
        return response.json();
      })
      .then(() => {
        form.classList.add('hidden');
        displayPosts();
        handlePostClick(post.id);
      })
      .catch(error => {
        console.error('Error updating post:', error);
        alert('Failed to update post. Please try again.');
      });
  };

  document.getElementById('cancel-edit').addEventListener('click', () => {
    form.classList.add('hidden');
  });
}

function deletePost(id) {
  if (!confirm('Are you sure you want to delete this post?')) return;
  
  fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) throw new Error('Failed to delete post');
      return response.json();
    })
    .then(() => {
      displayPosts();
      document.getElementById('post-detail').innerHTML = '<p>Select a post to view details</p>';
    })
    .catch(error => {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    });
}