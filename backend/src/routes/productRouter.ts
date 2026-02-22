import express from "express";
import {getProducts,addProduct} from "../controllers/productController.ts";
const productRouter = express.Router();

productRouter.get("/products",getProducts);
productRouter.post("/product",addProduct);

export default productRouter;
