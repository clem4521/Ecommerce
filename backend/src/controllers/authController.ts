import type { Request,Response } from "express";
import bcrypt from "bcrypt";
import db from "../config/mysqlConfig.ts";

export async function getUsers(req:Request,res:Response){
    const createUsersTableQuery = `CREATE TABLE IF NOT EXISTS
        users(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        )
    `;
    const getUsersQuery = "SELECT * FROM users";

    try {
       const [results] = await db.query(getUsersQuery);
       res.json({
        status:200,
        results
       });
    } catch (error:any) {
        if(error.code == 'ER_NO_SUCH_TABLE'){
            const [results] = await db.query(createUsersTableQuery);
            res.json({message:"Users table was created"})
            console.log(results);
        }
    }
}

export async function register(req:Request,res:Response){
    const {first_name,last_name,email,password} = req.body;
    const loginQuery = `INSERT INTO users(first_name,last_name,email,password) VALUES (?,?,?,?)`;
    const saltRounds = 10;

    const encryptPassword = bcrypt.genSalt(saltRounds,(error,salt)=>{
         bcrypt.hash(password,salt,async (error,hash)=>{
            const [results] = await db.query(loginQuery,[first_name,last_name,email,hash]);
            console.log(results);
            res.status(200).json({
                message:"User was create"
            });
        });
    });    
}

export async function login(req:Request,res:Response){
    const loginQuery = "SELECT email,password FROM users WHERE email = ?";
    const {email,password} = req.body;

    try{
        const [results] = await db.query(loginQuery,[email]);

        //@ts-expect-error
        const userPasswordCrypt = results[0].password;
        const match = await bcrypt.compare(password,userPasswordCrypt);

        if(match){
            return res.status(200).json({message:"successful"});
        }else{
            return res.json({message:"Unsuccessful"});
        }
        
    }catch(error){
        console.log(error)
        res.status(404).json({message:"There was an error"})
    }

}