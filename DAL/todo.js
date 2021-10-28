var todo=require("../models/todo");
var db=require("../utility/conn");
var todoDal= {
    getAlltodo: function (callback) {
        todo.find().then(function (data) {
            var arr = {message: "success", data: data}
            callback(arr);
        }).catch(function (err) {
            var arr = {message: "error", data: err.message}
            callback(arr);
        })
    },
    addTodo:function (body,callback) {
        var todoObj=new todo({
            name:body.name
        });
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
module.exports.show=function () {
    return "ABC"
}
