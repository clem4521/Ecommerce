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
	const editCartAmountQuery = `UPDATE carts SET amount=? WHERE productID=? AND userID=? AND status=?`;
	
	const {userID,productID} = req.body;

	try{
		const checkCart = await checkCartExist(db,userID,productID);
		const amount = checkCart[0][0].amount;
		console.log(amount)
		if(checkCart[0].length === 0){
			const results = await db.query(CheckUserQuery,[productID,userID,1,StatusType.PENDING]);
			res.json({message:"product was to cart"});
		}else if(checkCart[0].length > 0){
			const results = await db.query(editCartAmountQuery,[amount+1,productID,userID,"pending"])
		}
	}catch(error:any){
		console.log(error);
		if(error.code == 'ER_NO_SUCH_TABLE'){
			createTable();
			return res.json({"Status Code":200,"Content":"Dasebase was created."});
		}		
	}
}

/*---Other functions-----*/

async function addToMoreProduct(db:any,userID:Number,productID :Number){
	const getCartQuery = "SELECT * FROM carts WHERE userID=? AND productID=? AND status=?";
	const results = await db.query(getCartQuery,[userID,productID,'pending']);

	const amount = results[0].id;
	const newAmount = amount + 1;

	return newAmount;
}

async function checkCartExist(db:any,userID:Number,productID:Number){
	const cartExistQuery = "SELECT productID,amount,status FROM carts WHERE userID=? AND productID=? AND status=?"
	const results = await db.query(cartExistQuery,[userID,productID,'pending']);

	return results;
}

async function createTable(){
	const tableQuery = `CREATE TABLE IF NOT EXISTS 
	  carts(
			id INTEGER PRIMARY KEY AUTO_INCREMENT,
			productID INTEGER NOT NULL,
            userID INTEGER NOT NULL,
			amount INTEGER NOT NULl,
            status VARCHAR(50) NOT Null
	  )
	`;

	const results = await db.query(tableQuery);
}