const mongoose = require('mongoose');

const customerMoneySchema = new mongoose.Schema({
    "user1":{
        type: String,
        // required : true,
    },
    "user2":{
        type: String,
        // required : true,
    },
    "count" : {
        type: Number,
        // required : true,
    },
    
})

module.exports = mongoose.model("Transfer",customerMoneySchema);
