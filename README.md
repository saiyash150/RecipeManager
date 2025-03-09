✅ Recipe Management Application 🍲
A full-stack Recipe Management Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
This app allows users to create, read, update, and delete (CRUD) recipes, organize them into categories, and use drag-and-drop functionality to manage their recipes.

🚀 Live Demo
🔗 Frontend Deployed on Vercel: https://recipe-manager.vercel.app
🔗 Backend Deployed on Render: https://recipe-manager-api.onrender.com

📁 Project Structure
The project is structured as a MERN Stack application with a clear separation of backend and frontend.

pgsql
Copy
Edit
RecipeManager
│
├── Backend        <-- Backend (Express.js, Node.js, MongoDB)
│   ├── models
│   ├── routes
│   ├── index.js
│
├── Frontend       <-- Frontend (React.js)
│   ├── src
│   ├── public
│
├── package.json
📜 Features
✅ Add, Edit, Delete Recipes - Users can create new recipes, edit existing ones, and delete unwanted recipes.
✅ View Recipes - All recipes are displayed in a beautiful UI.
✅ Drag-and-Drop Functionality - Users can drag and drop recipes into different categories or reorder them.
✅ Category Based Filtering - Recipes are organized based on categories like Breakfast, Lunch, Dinner, Snacks, etc.
✅ Image Upload (via URL) - Users can upload image URLs of their recipes.
✅ Form Validation - Form fields are validated to ensure correct data entry.
✅ Real-time Database - Uses MongoDB Atlas for storing recipes.
✅ RESTful API - Backend uses Express.js to handle requests and connect to the database.
✅ Responsive Design - The application is fully responsive for mobile, tablet, and desktop.

💻 Tech Stack
✅ Frontend (React.js)
React.js (with Hooks)
Axios (for API calls)
React-beautiful-dnd (for drag-and-drop)
Vite (for fast development)
CSS Modules for styling
✅ Backend (Node.js + Express.js)
Node.js
Express.js
MongoDB (with Mongoose)
CORS
Nodemon (for development)
✅ Database
MongoDB Atlas (Cloud-based)
