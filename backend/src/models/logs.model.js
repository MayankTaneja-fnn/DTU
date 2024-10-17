import mongoose from 'mongoose'

const logSchema = new mongoose.Schema({

    fullName : {
        type : String,
        required : [true,"fullname is required"],
        trim : true,
    },
    email : {
        type : String,
        required : [true,"email is required"],
        trim : true,
        lowercase : true,
        unique:false
    },
    roll_no : {
        type : String,
        required : [true,"roll number is required"],

    },
    title : {
        type : String,
        required : [true,"title is required"],

    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    photos:{
        type:Array,
        required:[true,"Images are required"]
    }

},{
    timestamps : true
})



export const Logs = mongoose.model("Logs",logSchema)