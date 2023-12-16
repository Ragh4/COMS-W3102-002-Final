# Keeper App - COMS-W3102-002 Final Project

## Description
Keeper App is a web application designed for users to easily manage their notes. It offers a simple yet intuitive interface for adding and deleting notes. Each note is stored securely in a MongoDB database, ensuring data persistence and reliability. The app is ideal for users looking to keep track of their thoughts, tasks, or any important information in a structured and accessible way.

## Features and Functionality
- **Add Notes**: Users can add new notes with a title and content. Each new note is instantly saved to the MongoDB database.
- **Delete Notes**: Users have the option to delete notes. This removal is reflected both in the app's interface and in the MongoDB database, maintaining consistent data integrity.

## Technologies Used
- **React**: Used for building the user interface.
- **Node.js**: The runtime environment for the backend.
- **Express.js**: A web application framework for Node.js, used in creating server-side logic.
- **MongoDB**: A NoSQL database used for storing notes data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation and Running the Project
### Running the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   npm start
4. The backend server will be available at http://localhost:8000/api/notes
   
### Running the Frontend
1. Navigate to the backend directory:
   ```bash
   cd frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   npm start
4. The application will be accessible at http://localhost:3000

## Acknowledgments
Special thanks to Professor Ahamed and the teaching assistants, Esme and Shivam, for their guidance and support. This application is a part of the final project for the web development class, providing practical experience in building web applications.
