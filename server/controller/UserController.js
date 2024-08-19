// all the API will be here ; 


import { response } from "express";
import User from "../model/userModel.js" ;

// API to insert data inside Database

export const create = async(req,res)=> {                 // API to insert data inside Database
    try {
        const userData = new User(req.body );

        if (!userData)  { 
            return res.status(404).json({ msg: " user data not found "});
        }
        const savedData = await userData.save();
        res.status(200).json({ msg: " user created "});
    } catch (error ){
    res.status(500).json({error:error});
}
}

// API to fetch all the data from mongodb

export const getAll = async(req,res)=>{                 // API to fetch all the data from mongodb
    try {
        
        const userData= await User.find();
        if(!userData){
            return req.status(404).json({msg: "User data not found "});
        }
        res.status(200).json(userData);  

    } catch (error) {
        res.status(500).json({error:error});
        
    }
}


//API will fetch one user as id provided 

export const getOne = async (req,res) =>{          //API will fetch one user as id provided 
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User not found"});
        }
        res.status(200).json(userExist);

    } catch (error) {
        res.status(500).json({error:error});
        
    }

}

//API will  udpate  one user as id provided 

export const update = async(req,res)=>{           //API will udpate one user as id provided 
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found !"});

        }

        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User updated successfully"});


    } catch (error) {

        res.status(500).json({error:error});
        
    }
}



//API will DELETE user as id provided

export  const deleteUser = async(req,res)=>{
    
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User not exist"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}