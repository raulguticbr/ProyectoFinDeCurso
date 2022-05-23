var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
app.post("/send-email", (req,res) =>{
  console.log('Contraeña enviada');
});

app.listen(3000,()=>{
  console.log('servidor en => http://localhost:3000');
});
