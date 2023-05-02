# User Management API
This is a sample REST API built using Node.js and Express for managing users.

# Getting Started
To get started with this project, first clone the repository and then run:


`npm install`
This will install all necessary dependencies for the project.

Next, create a .env file in the root directory and add the following environment variables:

PORT=3000
This sets the port that the server will listen on.

To start the server, run:


`npm run start`
This will start the server at http://localhost:3000.

# API Endpoints
This API has the following endpoints:

GET /users
Returns a list of all users.

GET /users/:id
Returns a specific user by ID.

POST /users/new
Creates a new user.

DELETE /users/:id
Deletes a user by ID.

# Error Handling
If there is an error while processing a request, the server will return a JSON response with an error property containing a message describing the error.

# Conclusion
That's it! You now have a fully functional REST API for managing users. If you have any questions or run into any issues, please let us know.