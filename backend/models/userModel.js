const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userid:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});

const user=mongoose.model("user",userSchema);

module.exports=user;