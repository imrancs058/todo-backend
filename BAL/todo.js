var todoDal=require("../DAL/todo");
var todoBal= {
    getAllTodo: function (callback) {
        //get all todo
        todoDal.getAlltodo( function (err, data) {
            callback(null,data);
        });
    },
    addTodo:function (body,callback) {
        //post todo data
        todoDal.addTodo(body,function (err,data) {
            callback(null,data);
        })
    },

}
module.exports=todoBal;
