import express from "express"
import { addProductToCart, getCart, getCarts } from "../controllers/cartController.ts";

const cartRouter = express.Router();

cartRouter.get("/carts",getCarts);
cartRouter.get("/carts/:userID",getCart)

cartRouter.post("/carts",addProductToCart);

export default cartRouter;