var todoDal=require("../DAL/todo");
var todoBal= {
    getAllTodo: function (callback) {
        todoDal.getAlltodo( function (data, err) {
            callback(data);
        });
    },
    addTodo:function (body,callback) {
        todoDal.addTodo(body,function (data,err) {
            callback(data);
        })
    },

}
module.exports=todoBal;
