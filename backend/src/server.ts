import express from "express";
import cors from "cors";
import BodyParser from "body-parser";
import productRouter from "./routes/productRouter.ts";
const server = express();

server.use(express.json());
server.use(express.raw())
server.use(express.urlencoded({ extended: true }));
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended:true}));
server.use(cors({
  origin:"http://localhost:5173"
}));
server.use("/api",productRouter);

server.listen(8080,()=>{
	console.log("Server is running on port 8080");
});
