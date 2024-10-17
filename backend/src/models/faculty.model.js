import mongoose from 'mongoose'

const facultySchema = new mongoose.Schema({

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
        unique : true
    },
    password : {
        type : String,
        required : [true,"password is required"],

    }

},{
    timestamps : true
})



export const Faculty = mongoose.model("Faculty",facultySchema)