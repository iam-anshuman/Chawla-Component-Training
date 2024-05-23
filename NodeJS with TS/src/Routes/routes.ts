import express from 'express';
import { CreateUserController, GetUserController, UpdateUserController, } from '../Controller/User';

const router = express.Router();

router.post('/createUser',CreateUserController);
router.get('/getUser',GetUserController);
// router.get('/getUsers',GetUsersController);
router.put('/updateUser/:email',UpdateUserController);
router.delete('/deleteUser/:email',UpdateUserController);

export default router;