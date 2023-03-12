const express  = require('express');
const router = express.Router();
const User = require('./model');
router.post("/signup",async(req,res)=>{
try{
let user = await User.findOne({userName:req.body.userName})
if(user){
    return res.status(400).json({
        error:'user already existed'
    })
}
user = await User.create({
    userName : req.body.userName,
    password : req.body.password
})
res.json({
    message:"successfully registered",
    user
})
}catch(err){
    res.json({
        error:err.message
    })
}
})
router.post("/signin",async(req,res)=>{
try{
let user = await User.findOne({userName:req.body.userName})
if(!user){
    return res.status(400).json({
        error:'user not existed'
    })
}

res.json({
    message:"successfully signin",
    user
})
}catch(err){
    res.json({
        error:err.message
    })
}
})
module.exports = router;