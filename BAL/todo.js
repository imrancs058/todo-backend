var todoDal=require("../DAL/todo");
var todoBal= {
    getAllTodo: function (callback) {
        //get all todo
        todoDal.getAlltodo( function (data, err) {
            callback(data);
        });
    },
    addTodo:function (body,callback) {
        //post todo data
        todoDal.addTodo(body,function (data,err) {
            callback(data);
        })
    },

}
module.exports=todoBal;
