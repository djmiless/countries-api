const express = require("express");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const server = express();

const PORT = process.env.PORT || 5000;


server.use(cors());
server.use(express.json());




 // end points

 server.get("/", function(request, response){
    

    fs.readFile("db.json", function(error, result){
        if(error) throw new error;
        result = JSON.parse(result);

        if(result){
            response.send({
                data:result
            })
        }


    })



 })


server.listen(PORT, ()=>{
    console.log("Listening on PORT again: ", PORT);
})