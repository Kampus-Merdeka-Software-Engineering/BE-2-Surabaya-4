import express from "express";
import userController from "../controller/user-controller.js";

const userRouter = new express.Router()

userRouter.get('/invoice/:id',userController.get)

export {
    userRouter
}