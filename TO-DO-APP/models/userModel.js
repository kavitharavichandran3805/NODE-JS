const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is mandatory"]
    },
    email:{
        type:String,
        required:[true,"Email is mandatory"],
        unique:[true,"Mail id is already taken"]
    },
    password:{
        type:String,
        required:[true,"Password is mandatory"]
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("User",userSchema)