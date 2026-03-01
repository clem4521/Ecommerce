import express from "express";
import { getUsers, isAuthenticate, login, logout, register } from "../controllers/authController.ts";
const authRouter = express.Router();

authRouter.get("/auth/users",getUsers);
authRouter.post("/auth/register",register);
authRouter.post("/auth/login",login);
authRouter.get("/auth/authenticate",isAuthenticate);
authRouter.delete("/auth/logout",logout);

export default authRouter;