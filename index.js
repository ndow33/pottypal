//modules and packages
const bodyParser = require("body-parser");
const request = require("request");
const express = require("express");

const app = express();

//Access the public folder when using the webapp
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//declare the port 
app.listen(process.env.PORT || 3000);

//Home page
app.get("/home", function(req, res){
    //load the homepage
    res.sendFile(__dirname + "/index.html")
});

//maps page
app.get("/locations", function(req, res){
    //load locations page
    res.sendFile(__dirname + "/map.html")
})

//reviews page
app.get("/reviews", function(req, res){
    //load the reviews page
    res.sendFile(__dirname + "/review.html")
})
