import type {Request,Response} from "express";
import db from "../config/mysqlConfig.ts";

const StatusType = {
	PENDING : "pending",
} as const;
type StatusType = (typeof StatusType)[keyof typeof StatusType];

export async function getCarts(req:Request,res:Response){
    const tableQuery = `CREATE TABLE IF NOT EXISTS 
	  carts(
			id INTEGER NOT NUll,
			productID INTEGER NOT NULL,
            userID INTEGER NOT NULL,
			amount INTEGER NOT NULl,
            status VARCHAR(50) NOT Null
	  )
	`;

    const getCartsQuery= "SELECT * FROM carts";

    try{
		const [results] = await db.query(getCartsQuery);
		res.json(results)
	}catch(error:any){
	 	if(error.code == 'ER_NO_SUCH_TABLE'){
			const [results] = await db.query(tableQuery);
			return res.json();
		}
	}
}

export async function addProductToCart(req:Request,res:Response){
	const CheckUserQuery = `INSERT INTO carts(id,productID,userID,amount,status) Values(?,?,?,?,?)`;
	const editCartAmountQuery = `
		INSERT INTO carts(amount)
		SELECT amount 
		WHERE userID=? AND productID=? AND status=?`;
	
	const {userID,productID} = req.body;

	try{
		const checkCart = await checkCartExist(db,userID,productID);
		console.log(checkCart);

		const results = await db.query(CheckUserQuery,[1,productID,userID,1,StatusType.PENDING]);
		//console.log(results);
		res.json({message:"product was to cart"});
	}catch(error:any){
		console.log(error);
		if(error.code == "ER_DUP_ENTRY"){
			const amount = await addToMoreProduct(db,userID,productID);
			const [results] = await db.query(editCartAmountQuery,[amount,userID,productID]);
			console.log(results);
			res.json({message:"product cart was edit"});
		}
		
	}
}


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