const express=require('express');
const app=express();
//for getting post data
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
//for allowing corse
var cors = require('cors')
app.use(cors())
//route request to relevent controller
//for to do routes
var todoRoute=require("./route/todo");
app.use("/todo",todoRoute);
//for CDC route
var cdcRoute=require("./route/cdc");
app.use("/provider-state",cdcRoute);

//base request controller
app.get("/",async(req,res)=>{
    res.status(200).send("OK")
})


module.exports=app;
