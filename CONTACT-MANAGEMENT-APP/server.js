const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const router=require("./routes/contactRoutes")
const userRouter=require("./routes/userRoutes")
const errorHandler=require('./middleware/errorHandling')
const connectDb=require("./config/dbConnection")
const port=process.env.port || 5000

connectDb()

app.use(express.json())
app.use("/api/contact",router)
app.use("/api/user",userRouter)
app.use(errorHandler)


// app.get('/api/contact',()=>{
//     console.log("Hello world")
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

