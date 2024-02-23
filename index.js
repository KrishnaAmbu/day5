const express = require('express');
const cors = require('cors');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

let Student= require('./student.model');

mongoose.connect("mongodb+srv://krishnaambu2004:HWAtpHUYadd903Bm@cluster0.r7wpziq.mongodb.net/studentbase?retryWrites=true&w=majority&appName=Cluster0"
);
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB connection established successfully");
})


app.get("/",(req,res)=>{
    console.log("request received");
    res.json("hello world");
})

app.get("/hi",(req,res)=>{
    console.log("hi request received");
    res.json("welcome to nodemon");
})
app.get("/people",(req,res)=>{
    console.log("people request received");
    res.json([{name:"krishna",role:"student"},
{name:"dilna",role:"teacher"}]);
})
app.get("/student",async(req,res)=>{
    console.log("student request received");
    let data= await Student.find().catch(err =>{
        res.json("error loading data");
    });
    res.json(data);

//     res.json([{name:"tiya",age:20,dept:"it"},
// {name:"manasa",age:19,dept:"CS"}]);
});
app.get('/student/:id', async(req,res)=>{
let id= req.params.id;
let data =await Student.findById(id).catch(err =>{
    res.json("error finding");
});
if(!data){
    res.json("not found");
}
else{
    res.json(data);
}
});

app.post("/student",(req,res)=>{
 console.log(req.body);
 let student = new Student(req.body);
 student.save().then(()=>{res.json("saved successfully");
}).catch(err => {
    res.json("error:"+err);
});
});
//tot delete a student from database
app.delete("/student/:id",async(req,res)=>{
    let id = req.params.id;
    await Student.findByIdAndDelete(id)
    .then(()=>{
        res.json("data removed successfully");
    })
    .catch(()=>{
        res.json("failed deleting data");
    });
});
app.listen("4000",()=>{
    console.log("started server on 4000");
});