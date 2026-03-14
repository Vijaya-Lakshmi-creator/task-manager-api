Task Manager API
Description

This project is a RESTful Task Management API built using Node.js, Express.js, and MongoDB.

It allows users to create, read, update, and delete tasks (CRUD operations).

Features

Create Task

Get All Tasks

Get Task by ID

Update Task

Delete Task

Tech Stack

Node.js

Express.js

MongoDB

Mongoose

How to Run the Project
1 Install Dependencies
npm install
2 Start the Server
node server.js

Server runs at:

http://localhost:5000
API Endpoints
Method	Endpoint	Description
POST	/api/tasks	Create a new task
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get a task by ID
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task
