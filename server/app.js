const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT || 3000;

//DATABASE SET UP

mongoose.connect("mongodb://localhost:27017/loginDB", {newUrlParser: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);


//LOG-IN ROUTE

app.route("/login")

    .get((req, res)=>{
        //LOAD LOGIN FORM PAGE
        res.sendFile(__dirname + "/login.html");
    })

    .post((req,res)=>{
        //
        const user = new User ({
            "email": req.body.email,
            "password": req.body.password,
        });

        user.save();


    });


//SERVER INITIALIZED

app.listen(port, ()=>{
    if (port !== 3000){
        console.log("Server Running");
    }else{
        console.log("Server running on Local Port 3000 --- http://localhost:3000");
    }
});