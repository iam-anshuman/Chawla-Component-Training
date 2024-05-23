import { Request, Response } from 'express';
import UserModel,{UserDocument} from '../models/users';
import {createUser,findUser, updateUser,deleteUser} from "../Service/User.service"

const CreateUserController = (req:Request,res:Response)=>{
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ error: "Please provide all the details" });
    }

    const newUser = new UserModel({ name, email, password });

    createUser(newUser)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}


const GetUserController = (req:Request,res:Response)=>{
    const {email} = req.body;
    if (!email) {
        return res.status(400).json({ message: 'email is required' });
    }
    findUser({email}).then((user)=>{
        res.status(200).json(user)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

// const GetUsersController = (req:Request,res:Response)=>{
//     UserModel.find().then((users)=>{
//         res.status(200).json(users)
//     }).catch((err)=>{
//         res.status(500).json(err)
//     })

// }

const UpdateUserController = (req:Request,res:Response)=>{
    const {email} = req.params;
    const {name} = req.body;
    console.log(email)
    if ( !name && !email) {
        return res.status(400).json({ message: 'name, email are required' });
    }
    updateUser({email},{name}).then((user)=>{
        res.status(200).json(user)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

const DeleteUserController = (req:Request,res:Response)=>{
    const {email} = req.params;
    if (!email) {
        return res.status(400).json({ message: 'email is required' });
    }
    deleteUser({email}).then((user)=>{
        res.status(200).json(user)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

export { CreateUserController , GetUserController ,UpdateUserController,DeleteUserController};