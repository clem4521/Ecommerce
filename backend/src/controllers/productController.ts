import express from "express";
import db from "../config/mysqlConfig.ts";
const {Request,Response} = express;

export async function getProducts(req:Request,res:Response){
	const tableQuery = `CREATE TABLE IF NOT EXISTS 
	  products(
			id INTEGER PRIMARY KEY AUTO_INCREMENT,
			name VARCHAR(255),
			price DOUBLE
	  )
	`;
	
	const getProductQuery="SELECT * FROM products";
	
	try{
		const [results] = await db.query(tableQuery);
		console.log(results);
	}catch(error){
		console.log(error);
	}
	
	
	try{
		const [results] = await db.query(getProductQuery);
		console.log(results);
		res.json(results)
	}catch(error){
		console.log(error);
	}
}

export async function addProduct(req:Request,res:Response){
	const insertValue = `
		INSERT INTO 
		products(name,price)
		VALUES (?,?)
	`;
	const {name,price} = req.body;
	try{
		await db.query(insertValue,[name,price],(error,results)=>{
			console.log(results);
	  });
	}catch(error){
		console.log(error);
	}
	
	console.log(name,price);
}

export async function getProduct(req:Request,res:Response){
	const getProductquery = `SELECT * FROM products WHERE id = ?`
	
	const productId = req.params.id;
	
	try{
		const [results] = await db.query(getProductquery,[productId]);
		console.log(results);
	}catch(error){
		console.log(error);
	}
	
}

