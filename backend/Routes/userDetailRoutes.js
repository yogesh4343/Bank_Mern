;const express = require('express');
const { enterUserDetail, getSingleUserDetail, getUserDetailsFunc } = require('../Controllers/userDetailController');



const router = express.Router();

// router.get("/login",(req,res,next)=>{
//         res.send("login route")
//     })

router.post("/enterUser" ,enterUserDetail );
router.get("/singleUserDetail/:id" ,getSingleUserDetail );
router.get("/users" ,getUserDetailsFunc );


module.exports = router;



// {
//     "firstName" : "q",
//     "lastName" : "singh",
//     "DOB" : "10/1/2024",
//     "gender" : "male",
//     "Address" : "q",
//     "Phone" : "1234567890",
//     "name" : "q",
//     "email" : "q@gmail.com",
//     "accountType" : "saving",
//     "amount" : "2000",
//     "employment" : "student",
// }