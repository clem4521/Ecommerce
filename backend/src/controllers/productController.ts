import express from "express";

const {Request,Response} = express;

export function getProducts(req:Request,res:Response){
	res.json({status:200});
}
