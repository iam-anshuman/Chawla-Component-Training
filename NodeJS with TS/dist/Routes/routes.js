"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../Controller/User");
const router = express_1.default.Router();
router.post('/createUser', User_1.CreateUserController);
router.get('/getUser', User_1.GetUserController);
// router.get('/getUsers',GetUsersController);
router.put('/updateUser/:email', User_1.UpdateUserController);
router.delete('/deleteUser/:email', User_1.UpdateUserController);
exports.default = router;
