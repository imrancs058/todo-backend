var mongoose=require("mongoose");
var Schema=mongoose.Schema;
const schema=Schema({
    name: {type: String, required: true },
});
module.exports=mongoose.model("todo",schema);
