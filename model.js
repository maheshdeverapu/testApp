const mongoose = require('mongoose');
const express = require('express');
const userSchema = new mongoose.Schema({
    userName : {type:String,require:true,unique:true},
    password : {type:String,require:true},
})
const User = mongoose.model('user',userSchema);
module.exports = User;