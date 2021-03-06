const dotenv = require('dotenv').config({path: '../.env'});
const express = require('express');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
var mysql = require('mysql');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.get('/', (req,res) => {
    db.query("select * from switches", (err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

const db = mysql.createConnection({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE 
});

db.connect((err) => {
    if(err) throw err;
    console.log("Connected to mySQL DB!");
    
});