import express from "express"
import { addProductToCart, getCarts } from "../controllers/cartController.ts";

const cartRouter = express.Router();

cartRouter.get("/carts",getCarts);

cartRouter.post("/carts",addProductToCart);

export default cartRouter;