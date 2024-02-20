;const express = require('express');
const { Auth } = require('../Auth/Auth');
const { Signup, logIn, singleUser, logout } = require('../Controllers/userController');



const router = express.Router();

// router.get("/login",(req,res,next)=>{
//         res.send("login route")
//     })

router.post("/register" ,Signup );
router.post("/login" ,logIn );
router.get("/singleUser/:id" ,Auth ,singleUser);
router.post("/logout"  ,logout);


module.exports = router