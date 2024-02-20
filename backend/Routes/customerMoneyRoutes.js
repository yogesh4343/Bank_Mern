;const express = require('express');
const { getCostumerMoneyController, getUserTransaction, transactionAll } = require('../Controllers/customerMoneyController');



const router = express.Router();

// router.get("/login",(req,res,next)=>{
//         res.send("login route")
//     })

router.put("/transfer" ,getCostumerMoneyController );
router.post("/transaction" ,getUserTransaction );
router.get("/transactionAll" ,transactionAll );


module.exports = router