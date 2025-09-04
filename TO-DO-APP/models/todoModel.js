const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        required:[true,"Title is mandatory"]
    },
    description:{
        type:String,
        required:[true,"Description is mandatory"]
    },
    completed:{
        type:Boolean,
        required:[true,"Completion status is mandatory"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("Todo",todoSchema);