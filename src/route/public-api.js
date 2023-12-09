import express from "express";
import UserController from "../controller/user-controller.js";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router()
publicRouter.post('/api/users',UserController.register)
publicRouter.post('/api/users/login',userController.login)
publicRouter.post('/api/users/booking',userController.booking)

export {
    publicRouter,
}

