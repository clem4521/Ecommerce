import express from "express";
import { getUsers, login, register } from "../controllers/authController.ts";
const authRouter = express.Router();

authRouter.get("/auth/users",getUsers);
authRouter.post("/auth/register",register);
authRouter.post("/auth/login",login);

export default authRouter;