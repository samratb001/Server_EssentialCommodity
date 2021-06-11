const express = require("express");
const app = express();
const mongoose=require("mongoose");
const shopRoute=require('./Routes/shopRoutes/shop');
const customerRoute= require('./Routes/customerRoutes/customer');
var port = process.env.PORT || 5000;
app.use(express.json());
app.listen(port,()=>{console.log("Node Server is running at port " + port);});
// mongoose.connection("mongodb+srv:PrognaSU:<password>@cluster0.bzjvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
//     console.log("Database Successfully Connected");}).catch((err)=>{console.log(err)});

app.use('/api',shopRoute);
app.use('/api',customerRoute);
