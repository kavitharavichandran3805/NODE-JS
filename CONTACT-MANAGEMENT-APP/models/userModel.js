const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please give the username"]
    },
    email:{
        type:String,
        required:[true,"Please give the mail id"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        require:[true,"Please give the password"]
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema)