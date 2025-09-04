const constants=require("../constants")

const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode ? err.statusCode : 500
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                stack:err.stack
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                stack:err.stack
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                stack:err.stack
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                stack:err.stack
            })
            break;
        default:
            res.json({
                title:"Validation Error",
                message:err.message,
                stack:err.stack
            })
            break;
    }
};

module.exports=errorHandler;