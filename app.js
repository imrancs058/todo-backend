var app=require("./index");
require("dotenv").config();
var config=require("./config.json");
app.listen(config.port,()=>{
    console.log("Listening at port 3322")
})
