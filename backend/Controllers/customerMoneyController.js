const express = require('express');
const customerMoneySchema = require('../Models/customerMoneySchema');
const userDetailSchema = require('../Models/userDetailSchema');

exports.getCostumerMoneyController = async(req,res)=>{
    const {user1 , user2 , count} = req.body;
    try {
    const data1 = await userDetailSchema.findById(user1);
    const data2 = await userDetailSchema.findById(user2);

    console.log(user1);

    // console.log(user1 , user2 , count);
    // console.log(data1 , data2);

    data2.amount = count + data2.amount;
    data1.amount = data1.amount - count;

    await data1.save();
    await data2.save();

        return res.status(201).json({status:true , message:"Complete Transaction" , data1, data2});
    } catch (error) {
        
        console.log("error in transaction" , error)
        return res.status(500).json({status:false , message:"Error"})    ;
    }
}


// transaction

exports.getUserTransaction = async(req,res)=>{
    // const {user1:id1 , user2:id2 , count} = req.body;
    const {user1 , user2 , count} = req.body;
    try {
        const data1 = await userDetailSchema.findById(user1);
        const data2 = await userDetailSchema.findById(user2);

    // console.log("data1" , data1);


   let newTransaction =  new customerMoneySchema({
    user1:data1.firstName, user2:data2.firstName, count
   });


    await newTransaction.save();

        return res.status(201).json({status:true , message:"new Transaction", newTransaction})
    } catch (error) {
        
        console.log("error in transaction" , error)
        return res.status(500).json({status:false , message:"Error"})    ;
    }
}



// transactionAll

exports.transactionAll = async(req,res)=>{
    try {
    const x1 = await customerMoneySchema.find();

        return res.status(201).json({status:true , message:" All Transaction", x1})
    } catch (error) {
        
        console.log("error in transaction" , error)
        return res.status(500).json({status:false , message:"Error"})    ;
    }
}