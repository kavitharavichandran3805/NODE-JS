const express=require("express");
const errorHandler = require("./middleware/errorHandling");
const dbConnect = require("./config/dbConnection");
const app=express();
const PORT=process.env.PORT || 5000;
const dotenv=require("dotenv").config()

dbConnect()

app.use(express.json());
app.use("/api/user",require("../TO-DO-APP/routes/userRoutes"));
app.use("/api/todo",require("../TO-DO-APP/routes/todoRoutes"));
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});