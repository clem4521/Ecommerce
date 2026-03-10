import type {ErrorRequestHandler, Request,Response} from "express";
import db from "../config/mysqlConfig.ts";
import { publicDecrypt } from "node:crypto";

export async function getCarts(req:Request,res:Response){
    const tableQuery = `CREATE TABLE IF NOT EXISTS 
	  carts(
			id INTEGER PRIMARY KEY,
			productID INTEGER,
            userID INTEGER,
			amount INTEGER,
            status VARCHAR(50)
	  )
	`;

    const getCartsQuery= "SELECT * FROM carts";

    try{
		const [results] = await db.query(getCartsQuery);
		res.json(results)
	}catch(error:any){
	 	if(error.code == 'ER_NO_SUCH_TABLE'){
			const [results] = await db.query(tableQuery);
	 		console.log(results);
			return res.json();
		}
	}
}

export function addProductToCart(req:Request,res:Response){
	const CheckUserQuery = ``
}