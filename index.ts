import express, { Request, Response } from 'express';
import { UserController } from './controllers/Users';

const app = express();
const port = 3000;

// middleware to parse json requests
app.use(express.json());

// user controller
const u = new UserController();

// Routes
app.get("/users", u.getAllUsers);
app.get("/users/:id", u.getUserById);
app.post("/users/new", u.addNewUser);
app.post("/users/delete/:id", u.deleteUserById);

// Listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
