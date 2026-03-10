import express from "express"
import { getCarts } from "../controllers/cartController.ts";

const cartRouter = express.Router();

cartRouter.get("/carts",getCarts);

export default cartRouter;