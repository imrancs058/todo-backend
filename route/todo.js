const express=require('express');
const router=express.Router();
const todoBal=require('../BAL/todo');
router.get('/',async(req,res)=>{
    todoBal.getAllTodo((data,err)=>{
        if(data.message=="success"){
            res.status(200).json(data.data);
        }else{
            res.status(400).json(data.data);
        }

    })
})
router.post('/',async(req,res)=>{
    todoBal.addTodo(req.body,(data,err)=>{
        if(data.message=="success"){
            res.status(201).json(data.data);
        }else{
            res.status(400).json(data.data);
        }

    })
})

module.exports=router;
