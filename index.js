const express=require('express');
const app=express();
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
var cors = require('cors')
app.use(cors())

app.listen(3322,()=>{
    console.log("Listening at port 3322")
})

module.exports=app;
