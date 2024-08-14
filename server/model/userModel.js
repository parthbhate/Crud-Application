import mongoose from "mongoose";


// making user Scahema here

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
 
})

// export default mongoose.model("User", userSchema);
export default mongoose.model("User", userSchema);
