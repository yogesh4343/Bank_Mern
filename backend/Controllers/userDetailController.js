const express = require('express');
const userDetailSchema = require('../Models/userDetailSchema');


exports.enterUserDetail = async(req,res)=>{
    const {firstName,
    lastName,
    DOB,
    gender,
    Address,
    Phone,
    userName,
    email,
    accountType,
    amount,
    employment,
} = req.body;


try {
    let enterUser;
    enterUser = await userDetailSchema.findOne({userName: userName});

    if(enterUser){
        return res.status(400).json({status:false , message:"User already exists"});
    }

    if( !firstName ||
        !lastName ||
        !DOB ||
        !gender ||
        !Address ||
        !Phone ||
        !userName ||
        !email ||
        !accountType ||
        !amount ||
        !employment){
            // console.log("Enter All Details");
            return res.status(400).json({status:false , message:"Enter All Details"});
    }


    const newEnterUser = new userDetailSchema({
        firstName,
    lastName,
    DOB,
    gender,
    Address,
    Phone,
    userName,
    email,
    accountType,
    amount,
    employment,
    });

    await newEnterUser.save();

    return res.status(201).json({status:true , message: "UserDetail saved successfully" , newEnterUser })




} catch (error) {
    console.log("error in details" , error)
    return res.status(500).json({status:false , message:"Error"})    ;
}


};;





// get e USer Detail;

exports.getUserDetailsFunc = async(req,res)=>{
    // const {id} = req.params;

    try {
        let singleUserDetail;
        singleUserDetail = await userDetailSchema.find();
        if(!singleUserDetail){
            return res.status(500).json({status:false , message:"No Users"});
        };

        console.log(singleUserDetail);

        return res.status(201).json({status:true , message:"user Fetched" , singleUserDetail})
    } catch (error) {
        
        console.log("error in details" , error)
        return res.status(500).json({status:false , message:"Error"})    ;
    }
}




// get single USer Detail;

exports.getSingleUserDetail = async(req,res)=>{
    const {id} = req.params;

    try {
        let singleUserDetail;
        singleUserDetail = await userDetailSchema.findById(id);
        if(!singleUserDetail){
            return res.status(500).json({status:false , message:"User Id not Fetched"});
        };


        return res.status(201).json({status:true , message:"user Fetched" , singleUserDetail})
    } catch (error) {
        
        console.log("error in details" , error)
        return res.status(500).json({status:false , message:"Error"})    ;
    }
}