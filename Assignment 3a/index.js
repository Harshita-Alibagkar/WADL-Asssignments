const express = require("express"); //to import express module
const app = express();  //calling express module

app.use(express.static('public'))

app.listen(4000,()=>{
    console.log("Server is started");
})