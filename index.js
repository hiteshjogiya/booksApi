const express = require("express");
const mongoose = require("mongoose");

const route = require("./route");

//connect to mongodb
mongoose.connect("mongodb+srv://hiteshjogiya:V820n12.@cluster0.ssrhf.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true}).then(
    ()=>{
        const app = express();
        app.use("/",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log('server is started');
        });
    }
);
