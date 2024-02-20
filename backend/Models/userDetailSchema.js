const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    
    firstName:{
        type:String,
        // required:true
    },
    lastName:{
        type:String,
        // required:true
    },
    DOB:{
        // type:Date,
        type:String,
        // required:true
    },
    gender:{
        type:String,
        // required:true
    },
    Address:{
        type:String,
        // required:true
    },
    Phone:{
        type:String,
        // required:true
    },
    userName:{
        type:String,
        // required:true,
        // unique:true
    },
    email:{
        type:String,
        // required:true,
    },
    accountType:{
        type:String,
        // required:true,
    },
    amount:{
        type:Number,
        // required:true
    },
    employment:{
        type:String,
        // required:true
    },
    
})

module.exports = mongoose.model("UserDetail",userDetailSchema);
