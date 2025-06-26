TRAVEL BLOG POST
##DETAILS:
Code Challenge Blog: This is a simple single-page blog application that the user can see Africa's scenery.
Built with HTML, CSS (Tailwind CSS), and JavaScript, demonstrating basic CRUD (Create, Read, Update, Delete) operations on blog posts.
It uses JSON-Server as a mock backend API for data persistence.
 
##Features View Blog Posts: 
Displays a list of blog posts fetched from a local JSON server.

Create New Posts: Add new blog entries through an intuitive modal form.

Edit Existing Posts: Modify the title, author, date, content, and tags of existing posts using the same modal form.

Delete Posts: Remove unwanted blog posts from the list.

Responsive Design: The layout is designed to be adaptable for various screen sizes, leveraging Tailwind CSS.

Local Data Storage: Utilizes json-server to simulate a REST API and store data in a db.json file.

Client-Side Logic: All interactions (fetching, rendering, form handling, and CRUD operations) are managed by client-side JavaScript.

##Prerequisites Before running this project, you need to have the following installed:

Node.js: Includes npm (Node Package Manager).

Download Node.js

You also need to install json-server globally:

npm install -g json-server

Installation and Setup: Follow these steps to get the project up and running on your local machine:

Clone the Repository (or create files manually)


Otherwise, please make sure you have the index.html, index.js, db.json, and style.css (even if empty) files in the same directory.

Start JSON Server: Navigate to the project directory in your terminal and start the JSON Server using your db.json file:

json-server --watch db.json --port 3000

This will start the API server, typically accessible at http://localhost:3000/posts. Ensure it's running before opening the HTML file.

Open the Application: Open the index.html file in your web browser. You can usually do this by double-clicking the file or by right-clicking and selecting "Open with..." your preferred browser.

Usage Once the JSON-server is running and you have opened index.html in your browser:

View Posts: The latest blog posts will be displayed on the main page.

Create Post: Click the "Create New Post" button to open a modal form. Fill in the details and click "Save Post".

Edit Post: Click the "Edit" button on any post card to pre-fill the modal form with the post's current data. Make your changes and click "Save Post".

Delete Post: Click the "Delete" button on any postcard. A confirmation prompt will appear before deletion.

File Structure index.html: The main HTML file that structures the web page.

index.js: The JavaScript file containing all the client-side logic for fetching data, rendering posts, and handling CRUD operations.

db.json: The JSON file used by json-server to store your blog post data. It acts as your mock database.

style.css: (Assumed) A CSS file for custom styles, complementing Tailwind CSS.

Technologies Used: HTML5: For structuring the web content.

CSS3: For styling, with a strong reliance on Tailwind CSS for utility-first styling and responsiveness.

JavaScript (ES6+): For all interactive client-side logic and API interactions.

json-server: A lightweight tool for creating a full fake REST API in less than a minute.

Potential Enhancements Detailed Post View: Implement a "Read More" functionality to view the full content of a post on a separate page or a larger modal.

Search/Filter: Add functionality to search or filter posts by title, author, or tags.

Form Validation: Enhance client-side form validation for a better user experience.

User Authentication: Implement a simple authentication system if multiple users are intended.

Backend Integration: Replace json-server with a real backend.

Better Error Handling: More sophisticated UI feedback for API errors.

Loading States: Display loading indicators during API calls.

##License
MIT License

Copyright (c) 2025 Adreen Nyawira G.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal In the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE.

This project was developed by Adreen Nyawira.G

Feel free to contribute further, and you can reach me at email:githinjiadreen27@gmail.com

