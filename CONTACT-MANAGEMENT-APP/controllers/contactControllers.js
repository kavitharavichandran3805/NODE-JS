const asyncHandler=require("express-async-handler")
const Contact=require("../models/contactModel")

const getContact=asyncHandler(async (req,res)=>{
    const contacts=await Contact.find({user_id:req.user.id})
    res.status(200).json(contacts)
})

const createContact=asyncHandler(async (req,res)=>{
    const {name,email,phone}=req.body
    if(!name || !email || !phone){
        throw new Error("All the fields are mandatory")
    }
    // console.log(req.body)
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    })
    res.status(201).json(contact)
})
const getContactById=asyncHandler(async (req,res)=>{
    const {id}=req.params
    const contact=await Contact.findById(id)
    if(!contact){
        res.status(404)
        throw new Error("No contact found")
    }
    res.status(200).json(contact)
})

const editContact=asyncHandler(async (req,res)=>{
    const {id}=req.params
    const contact=await Contact.findById(id)
    if(!contact){
        res.status(404)
        throw new Error("No contact found")
    }
    if(contact.user_id.toString() !== req.user.id){
  res.status(403)
  throw new Error("User is not permitted to make changes");
}

    const updatedContact=await Contact.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    res.status(201).json(updatedContact)
})

const deleteContact=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const contact=await Contact.findById(id)
    if(!contact){
        res.status(404)
        throw new Error("No contact found")
    }
    if(contact.user_id.toString() !== req.user.id){
  res.status(403)
  throw new Error("User is not permitted to make changes");
}

    await Contact.findByIdAndDelete(id);
    res.status(201).json(contact)
})

module.exports={getContact,createContact,getContactById,editContact,deleteContact}
