//importing schema
var todo=require("../models/todo");
//open db connection
var db=require("../utility/conn");
var todoDal= {
    getAlltodo: function (callback) {
        //query to get all todo
        todo.find().then(function (data) {
            var arr = {message: "success", data: data}
            callback(arr);
        }).catch(function (err) {
            var arr = {message: "error", data: err.message}
            callback(arr);
        })
    },
    addTodo:function (body,callback) {
        //creation of onject for db insertion
        var todoObj=new todo({
            name:body.name
        });
        //saving object to db
        todoObj.save().then(function (savedData) {
            var data={message:"success",data: {name:savedData._doc.name}}
            callback(data)
        }).catch(function (err) {
            var data={message:"error",data:err.message}
            callback(data);
        })
    },

}
module.exports=todoDal;
