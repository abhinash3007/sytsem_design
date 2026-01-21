const express=require('express');
const app=express();

let data="Old Data"
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/getData',(req,res)=>{
    res.send({data});
})

app.get('/updateData',(req,res)=>{
    data="New Data";
    res.send({message:"Data Updated"});
})
app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})