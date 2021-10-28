const express=require('express');
const app=express();
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
var cors = require('cors')
app.use(cors())

var todoRoute=require("./route/todo");
app.use("/todo",todoRoute);
app.get("/",async(req,res)=>{
    res.status(200).send("OK")
})


module.exports=app;
