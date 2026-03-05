import express from "express";
import cors from "cors";
import BodyParser from "body-parser";
import cookieParser from "cookie-parser";
import productRouter from "./routes/productRouter.ts";
import authRouter from "./routes/authRouter.ts";
import type { Request,Response } from "express";
import { Session } from "node:inspector";
const server = express();

server.use(express.json());
server.use(express.raw())
server.use(express.urlencoded({ extended: true }));
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended:true}));
server.use(cookieParser());
server.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
}));

server.use("/api",productRouter);
server.use("/api",authRouter);

server.get("/test",(req:Request,res:Response)=>{
  res.json(req.cookies);
})
server.listen(8080,()=>{
	console.log("Server is running on port 8080");
});
