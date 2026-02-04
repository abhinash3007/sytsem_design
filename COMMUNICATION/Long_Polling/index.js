const express=require("express");
const app=express();

let data="Old Data";
const waitingClients=[];
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get('/getData',(req,res)=>{
    const responseData=req.query.lastdata;
    if(data!=responseData){
        res.json({data});
    }else{
        waitingClients.push(res);
    }
});

app.get('/updateData',(req,res)=>{
    data=req.query.data;
    waitingClients.forEach(clientRes=>{
        clientRes.json({data});
    })
    waitingClients==0;
    res.json({message:"Data Updated"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})