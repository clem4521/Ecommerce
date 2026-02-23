import express from "express";
import { getUsers, register } from "../controllers/authController.ts";
const authRouter = express.Router();

authRouter.get("/auth/users",getUsers);
authRouter.post("/auth/login",register);

export default authRouter;