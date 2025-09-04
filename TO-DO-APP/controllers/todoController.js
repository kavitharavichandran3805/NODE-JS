const asyncHandler=require("express-async-handler")
const Todo=require("../models/todoModel")

const getTasks=asyncHandler(async(req,res)=>{
    const tasks=await Todo.find({user_id:req.user.id})
    res.status(200).json({tasks})
})

const createTask = asyncHandler(async (req, res) => {
    const { title, description, completed, createdAt } = req.body;

    // validation
    if (!title || !description || typeof completed !== "boolean") {
        res.status(400);
        throw new Error("Title, description and completion status are mandatory");
    }

    const task = await Todo.create({
        title,
        description,
        completed,
        createdAt, // optional, if not sent defaults to Date.now
        user_id: req.user.id
    });

    res.status(200).json(task);
});

const getTaskById=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const task=await Todo.findById(id)
    if(!task){
        res.status(404)
        throw new Error("Task not found");
    }
    if(task.user_id.toString()!=req.user.id){
        res.status(401)
        throw new Error("User is not authorized to request or make changes")
    }
    res.status(200).json(task)
})

const updateTask=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const task=await Todo.findById(id)
    if(!task){
        res.status(404)
        throw new Error("Task not found")
    }
    if(task.user_id.toString()!=req.user.id){
        res.status(401)
        throw new Error("User is not authorized to request or make changes")
    }
    const updatedTask=await Todo.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedTask)
})

const deleteTask=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const task=await Todo.findById(id)
    if(!task){
        res.status(404)
        throw new Error("Task not found")
    }
    if(task.user_id.toString()!=req.user.id){
        res.status(401)
        throw new Error("User is not authorized to request or make changes")
    }
    await task.deleteOne()
    res.status(200).json(task)
})

module.exports={getTasks,createTask,getTaskById,updateTask,deleteTask}