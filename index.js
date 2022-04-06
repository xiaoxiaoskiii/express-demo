const express = require('express')
const app = express()
const fs =require('fs');
const path =require('path');

//http://127.0.0.1:3000/homework?id=1
app.get('/homework', (req,res) => {
    const id = req.query.id;
    const filepath = path.join(__dirname,'data', id+'.json');
    fs.readFile(filepath, {"encoding":"utf-8"} ,(err,result) => {
        if(err){
            res.status(500);
            res.send(err);
        }else{
            res.status(200);
            res.send(JSON.stringify(result));
        }
    })
})

app.listen(3000)