import express from "express";
import productRouter from "./routes/productRouter.ts";
const server = express();

server.use("/api",productRouter);

server.listen(8080,()=>{
	console.log("Server is running on port 8080");
});
