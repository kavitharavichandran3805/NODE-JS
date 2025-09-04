const express=require("express")
const router=express.Router()
const {register,login,current}=require("../controllers/userController")
const validateTokenHandler=require("../middleware/validTokenHandler")

router.post("/register",register)
router.post("/login",login)
router.get("/current",validateTokenHandler,current)

module.exports=router