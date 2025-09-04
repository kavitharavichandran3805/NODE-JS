const express=require("express")
const router=express.Router()
const {getTasks,createTask,getTaskById,updateTask,deleteTask}=require("../controllers/todoController")
const validateToken = require("../middleware/validTokenHandler")

router.use(validateToken)
router.get("/getTasks",getTasks).post("/createTask",createTask)
router.get("/getTask/:id",getTaskById).put("/updateTask/:id",updateTask).delete("/deleteTask/:id",deleteTask)

module.exports=router