var express=require("express");
var router=express.Router();
router.post('/',function (req, res) {
    const consumer = req.query['consumer'];
    const providerState = req.query['state'];
    res.send(`changed to provider state "${providerState}" for consumer "${consumer}"`);
    res.status(200);
});
module.exports=router;
