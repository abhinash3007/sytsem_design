const express=require("express");
const app=express();

const data="Old Data";
const waitingClients=[];
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get('/getData',(req,res)=>{
    const responseData=req.body.lastData;
    if(data!=responseData){
        res.json({data});
    }else{
        waitingClients.push(res);
    }
});

app.get('/updateData',(req,res)=>{
    data=req.body.data;
    waitingClients.forEach(clientRes=>{
        clientRes.json({data});
    })
    waitingClients=[];
    res.json({message:"Data Updated"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})