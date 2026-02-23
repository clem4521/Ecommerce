import type { Request,Response } from "express";
import db from "../config/mysqlConfig.ts";

export async function getUsers(req:Request,res:Response){
    const createUsersTableQuery = `(CREATE TABLE IF NOT EXISTS
        users(
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        )
    `;
    const getUsersQuery = "SELECT * FROM users"
    try {
        const [results] = await db.query(createUsersTableQuery);
        console.log(results);
    } catch (error) {
        console.log(error);
    }

    try {
        const [results] = await db.query(getUsersQuery);
        res.json(results);
    } catch (error) {
        console.log(error)
    }
}

export async function register(req:Request,res:Response){
    const {first_name,last_name,email,password} = req.body;
    const loginQuery = `INSERT INTO users(first_name,last_name,email,password)`;

    //const encryptPassword = ;

    const [results] = await db.query(loginQuery,[first_name,last_name,email,password])

    console.log(results);
    res.json({
        status:200
    })
}