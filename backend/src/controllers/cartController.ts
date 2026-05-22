import type {Request,Response} from "express";
import db from "../config/mysqlConfig.ts";

const StatusType = {
	PENDING : "pending",
} as const;
type StatusType = (typeof StatusType)[keyof typeof StatusType];

/*----Endpoints-----*/

export async function getCarts(req:Request,res:Response){
    const getCartsQuery= "SELECT * FROM carts";

    try{
		const [results] = await db.query(getCartsQuery);
		res.json(results)
	}catch(error:any){
	 	if(error.code == 'ER_NO_SUCH_TABLE'){
			createTable();
			return res.json({"Status Code":200,"Content":"Dasebase was created."});
		}
	}
}

export async function addProductToCart(req:Request,res:Response){
	const CheckUserQuery = `INSERT INTO carts(productID,userID,amount,status) Values(?,?,?,?)`;
	const editCartAmountQuery = `
		INSERT INTO carts(amount)
		WHERE userID=? AND productID=? AND status=?`;
	
	const {userID,productID} = req.body;

	try{
		const checkCart = await checkCartExist(db,userID,productID);
		if(checkCart){
			const results = await db.query(CheckUserQuery,[productID,userID,1,StatusType.PENDING]);
			res.json({message:"product was to cart"});
		}
		//console.log(checkCart);

		
		//console.log(results);

		

	}catch(error:any){
		console.log(error);
		if(error.code == "ER_DUP_ENTRY"){
			const amount = await addToMoreProduct(db,userID,productID);
			const [results] = await db.query(editCartAmountQuery,[amount,userID,productID]);
			console.log(results);
			res.json({message:"product cart was edit"});
		}

		if(error.code == 'ER_NO_SUCH_TABLE'){
			createTable();
			return res.json({"Status Code":200,"Content":"Dasebase was created."});
		}

		
	}
}

/*---Other functions-----*/

async function addToMoreProduct(db:any,userID:Number,productID :Number){
	const getCartQuery = "SELECT * FROM carts WHERE userID=? AND productID=? AND status=?";
	const [results] = await db.query(getCartQuery,[userID,productID,'pending']);

	const amount = results[0].id;
	const newAmount = amount + 1;

	return newAmount;
}

async function checkCartExist(db:any,userID:Number,productID:Number){
	const cartExistQuery = "SELECT * FROM carts WHERE userID=? AND productID=? AND status=?"
	const [results] = await db.query(cartExistQuery,[userID,productID,'pending']);

	return results;
}

async function createTable(){
	const tableQuery = `CREATE TABLE IF NOT EXISTS 
	  carts(
			id INTEGER PRIMARY KEY,
			productID INTEGER NOT NULL,
            userID INTEGER NOT NULL,
			amount INTEGER NOT NULl,
            status VARCHAR(50) NOT Null
	  )
	`;

	const [results] = await db.query(tableQuery);
}