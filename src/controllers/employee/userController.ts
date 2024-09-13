

// controllers/userController.ts

import { Request, Response } from 'express';
import { assestModel } from '../employee/assestModel' 


export const getAllEmployees = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Send the users as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' }); // Send an error response
    }
};
