var mongoose=require("mongoose");
var config=require("../config.json");

mongoose.connect(config.mongodatabaseConnection,{ useNewUrlParser: true,useUnifiedTopology: true});
//db.serverStatus().connections run this cmd on shell for checking connections
//mongoose.Promise=global.Promise;
