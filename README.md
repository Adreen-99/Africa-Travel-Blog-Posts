# Africa Travel Blog 🌍✈️

![Travel Blog Screenshot](./images/screenshot.png) *(add a screenshot later)*

A dynamic travel blog showcasing African destinations, built with JavaScript, HTML, CSS, and powered by a `json-server` backend.

## Features

- 🖼️ **Browse posts** with beautiful destination images
- 📝 **Read detailed stories** about each travel experience
- ✨ **Create new posts** about your own adventures
- ✏️ **Edit existing posts** to update information
- 🗑️ **Delete posts** you no longer want
- 📱 **Responsive design** works on all devices

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (ES6)
- Backend:
  - `json-server` (mock REST API)
- Tools:
  - Git & GitHub
  - Live Server (VS Code extension)

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Adreen-99/Africa-Travel-Blog-Posts.git
   cd Africa-Travel-Blog-Posts

Install dependencies:

bash
npm install -g json-server
Start the backend server:

bash
json-server --watch db.json --port 3000
Open the project in your browser:

Use VS Code's Live Server extension, or

Open index.html directly in your browser

API Endpoints
The json-server provides these RESTful endpoints:

Endpoint	Method	Description
/posts	    GET	    Get all blog posts
/posts	    POST	  Create new post
/posts/:id	GET	    Get single post
/posts/:id	PATCH	  Update post
/posts/:id	DELETE	Delete post

Project Structure

Africa-Travel-Blog-Posts/
├── css/
│   └── style.css           # All styling
├── images/                 # Destination images
├── src/
│   └── index.js            # Main JavaScript logic
├── db.json                 # Database with blog posts
├── index.html              # Main HTML file
└── README.md               # This file

How to Contribute:
Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Made with ❤️ by [Adreen Githinji]
Email Address: githnjiadreen27@gmail.com  
| Live Demo (add link when deployed)
