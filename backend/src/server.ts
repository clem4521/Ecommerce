import express from "express";
import BodyParser from "body-parser";
import productRouter from "./routes/productRouter.ts";
const server = express();

server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended:true}));

server.use("/api",productRouter);

server.listen(8080,()=>{
	console.log("Server is running on port 8080");
});
