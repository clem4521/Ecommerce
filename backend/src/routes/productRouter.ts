import express from "express";
import {getProducts} from "../controllers/productController.ts";
const productRouter = express.Router();

productRouter.get("/products",getProducts);

export default productRouter;
