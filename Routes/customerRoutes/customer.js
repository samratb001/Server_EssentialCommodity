const app = require("express");
const customer=app.Router();
const mongodb=require('mongodb');
const mongoose=require('mongoose');
var customerSchema=require('../../dbmodel/customer');

customer.get('/customer',(req,res,next)=>{    
        const jsonData={ name: 'Unknown', age: '23'};
        res.send(jsonData);
        next();
});

// sign in
customer.post('/customersignin',(req,res,next)=>{

        const newCustomer = new customerSchema({
                name : req.body.name,
                address: req.body.address,
                phonenumber: req.body.phonenumber,
                username: req.body.username,
                password:req.body.password
        });
        console.log(req.body);
        console.log(newCustomer);
        res.status(200).send("Success");
        // res.send(newCustomer);
        next();
        // newCustomer.save().then(
        //          res.status(200).json({status:'Successfully Saved'})).catch();
        //          next();
});

//login

//will request a get request password willbe fetched via get request to ui and then by comparing password we will allow to login or logout
customer.get("/customerlogin/:userid",(req,res,next)=>{
        customerSchema.find({"username":userid}).then(result =>{
                console.log(result.password);
        res.status(200).send(result.password);        
        });       

});

customer.get("/allcustomer",(req,res,next)=>{

        // var allcustomer= new customerSchema();
        customerSchema.find({}).then(result =>{
            console.log(result);
            res.status(200).send(result); next();
        }).catch((err)=>{console.log(err)});
    });


module.exports=customer;