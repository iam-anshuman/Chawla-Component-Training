"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = exports.UpdateUserController = exports.GetUserController = exports.CreateUserController = void 0;
const users_1 = __importDefault(require("../models/users"));
const User_service_1 = require("../Service/User.service");
const CreateUserController = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ error: "Please provide all the details" });
    }
    const newUser = new users_1.default({ name, email, password });
    (0, User_service_1.createUser)(newUser)
        .then((user) => {
        res.status(201).json(user);
    })
        .catch((err) => {
        res.status(500).json(err);
    });
};
exports.CreateUserController = CreateUserController;
const GetUserController = (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'email is required' });
    }
    (0, User_service_1.findUser)({ email }).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
};
exports.GetUserController = GetUserController;
// const GetUsersController = (req:Request,res:Response)=>{
//     UserModel.find().then((users)=>{
//         res.status(200).json(users)
//     }).catch((err)=>{
//         res.status(500).json(err)
//     })
// }
const UpdateUserController = (req, res) => {
    const { email } = req.params;
    const { name } = req.body;
    console.log(email);
    if (!name && !email) {
        return res.status(400).json({ message: 'name, email are required' });
    }
    (0, User_service_1.updateUser)({ email }, { name }).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
};
exports.UpdateUserController = UpdateUserController;
const DeleteUserController = (req, res) => {
    const { email } = req.params;
    if (!email) {
        return res.status(400).json({ message: 'email is required' });
    }
    (0, User_service_1.deleteUser)({ email }).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
};
exports.DeleteUserController = DeleteUserController;
