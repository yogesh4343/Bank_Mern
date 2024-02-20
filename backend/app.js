const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require("./Routes/userRoutes");
const userDetailRoutes = require("./Routes/userDetailRoutes");
const customerMoneyRoutes = require("./Routes/customerMoneyRoutes");
const dotenv = require('dotenv');


dotenv.config();            // for connecting .envv
app.use(express.json());
app.use(cookieParser());


app.use("/api" , userRoutes );
app.use("/api" , userDetailRoutes );
app.use("/api" , customerMoneyRoutes );

app.get("/",(req,res)=>{
    res.send("Hello");
    console.log("Hello");
});







// bd 
// const API = "mongodb+srv://yogesh:9891334343@cluster0.jxgpvwn.mongodb.net/?retryWrites=true&w=majority";
// const PORT = 4000;
mongoose.connect(process.env.API).then((req,res)=>{
    app.listen(process.env.PORT);
    console.log('Db connected');

}).then((req,res)=>{
    console.log('listening on port', process.env.PORT)
}).catch((err)=>{
    console.log("DB not connected");
})