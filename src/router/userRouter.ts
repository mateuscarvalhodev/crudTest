import express from "express";
import { UserController } from "../controller/UserController";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../database/UserDataBase";

export const userRouter = express.Router();
const userController = new UserController(new UserBusiness(new UserDataBase()));
userRouter.get('/', userController.getUsers)
userRouter.post('/signup', userController.signup)
userRouter.put('/:id', userController.editUser)
userRouter.delete('/:id', userController.deleteUser)