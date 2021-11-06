var app=require("./index");
require("dotenv").config();
app.listen(process.env.PORT,()=>{
    console.log("Listening at port 3322")
})
