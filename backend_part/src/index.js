const express=require("express");
const cors=require("cors");
const app=express();
const collection=require("./mongodb")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send('node connected');
    })
    
    app.post("/admin",async(req,res)=>{
    
        const {name,rating,duration,date,about}=req.body;
        const data={name,rating,duration,date,about}
    
        await collection.insertMany([data])
         res.json({data})
         console.log("success")
    
    })
    
    app.get("/movie",async(req,res)=>{
    const list= await collection.find({});
     res.json(list)
})

    app.get("/movies/:name",async (req,res)=>{
        const rname=req.params.name;
        
        try{
        const bt=await collection.find({name:rname})
        res.json(bt)
        }
        catch(err){
            console.error(err)
        }
    //     console.log(bt)
    })

    app.listen(5000,()=>{
        console.log("port connected");
    })

