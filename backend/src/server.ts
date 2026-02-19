import express from "express";

const server = express();

server.listen(8080,()=>{
	console.log("Server is running on port 8080");
});
