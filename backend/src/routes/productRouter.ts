import express from "express";
import {getProducts,getProduct,addProduct} from "../controllers/productController.ts";
const productRouter = express.Router();

productRouter.get("/products",getProducts);
productRouter.get("/products/:id",getProduct);

productRouter.post("/product",addProduct);

export default productRouter;
