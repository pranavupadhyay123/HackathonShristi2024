const mysql = require("mysql");
var path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
var publicPath = path.resolve(__dirname, 'public');


const app = express();
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kavita@782435",
    database: "testing"
});

// Connect to the database
connection.connect(function (err) {
    if (err) throw err; 
    console.log("Connected to the Database");
});

app.get("/", function(req, res) {
    res.render("login")
});

app.post("/", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    console.log(email);
    console.log(password)

    connection.query("SELECT * FROM loginuser WHERE user_name = ? AND user_pass = ?", [email, password], function(error, results, fields) {
        if (error) {
            console.error("Error executing MySQL query:", error);
            return res.status(500).send("Error executing MySQL query");
        }
        
        if (results.length > 0) {
            res.redirect("/register");
        } else {
            res.redirect("/");
        }
    });
});

app.get("/welcome", function(req, res){
    res.sendFile(__dirname + "/register/register.html");
});

// set app port
app.listen(4500);


