import { Request, Response } from "express";

// mock data
const userData:UserInterface[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'password' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', password: 'password' },
];

// interface
interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
};

// class
class UserController {
  getAllUsers = (req: Request, res: Response): void => {
    res.status(200).send({userData});
  }

  getUserById = (req: Request, res: Response): void => {
    const {id} = req.params;
    const userId = parseInt(id, 10);

    const user = userData.find(element => element.id === userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).send(user);
  }

  addNewUser = (req: Request, res: Response): void => {
    const {name, email, password} = req.body;
    
    const newUser: UserInterface = {
      id: 4,
      name,
      email,
      password,
    };

    // Check if request body is empty
    if (!name || !email || !password) {
      res.status(400).json({ 
        message: "Error: Invalid request body" 
      });
      return;
    }
  
    // try catch
    try{
      res.status(201).json({
        message: "new user created", 
        user: newUser
      });
    } catch (err) {
      res.status(500).json({ 
        message: "Error creating new user",
      });
    }
  }

  deleteUserById = (req: Request, res: Response): void => {
    const {id} = req.params;
    const userId = parseInt(id, 10);
    const index = userData.find(element => element.id === userId);

    if(index === null){
      res.status(404).json({
        message: "User not found"
      });
      return;
    }

    // mock delete
    userData.splice(userId, 1);
    
    res.status(200).json({
      message: "User deleted",
      user: index
    })
  }
  
};

export {UserController};