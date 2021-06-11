const app = require('express');
const shop = app.Router();


shop.get("/shop",(req,res,next)=>{
    const msg="Shop Routes it is";
    res.send(msg);
});







module.exports=shop;