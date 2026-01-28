import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: [true, "fullname is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        lowercase: true,
        unique: true
    },
    roll_no: {
        type: String,
        required: [true, "roll number is required"],
        unique: true

    },
    password: {
        type: String,
        required: false,

    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    attendance: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
})



export const Student = mongoose.model("Students", studentSchema)