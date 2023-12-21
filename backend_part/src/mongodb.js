const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/MovieInfo');

const MovieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }
})

const collection =mongoose.model("Collection1",MovieSchema)

module.exports=collection;
