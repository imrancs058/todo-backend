const express=require('express');
//creating router
const router=express.Router();
const todoBal=require('../BAL/todo');
//get all todo list
router.get('/',async(req,res)=>{
    todoBal.getAllTodo((err,data)=>{
        if(data.message=="success"){
            res.status(200).json(data.data);
        }else{
            res.status(400).json(data.data);
        }

    })
})
//add to do list
router.post('/',async(req,res)=>{
    todoBal.addTodo(req.body,(err,data)=>{
        if(data.message=="success"){
            res.status(201).json(data.data);
        }else{
            res.status(400).json(data.data);
        }

    })
})

module.exports=router;
