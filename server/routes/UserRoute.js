import express from "express";
import { create ,getAll, getOne } from "../controller/UserController.js";

const route = express.Router();

route.post("/create",create);      // using post method cos we are creating  somthing 

route.get("/getall",getAll);      // this will fetch all the user data that is present inside the database 

route.get("/getone/:id",getOne); // this will fetch only One user data  the user data that is present inside the database

//route.put("/update/:id",Update);

export default route;