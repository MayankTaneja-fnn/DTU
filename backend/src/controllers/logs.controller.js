import mongoose from 'mongoose';

import { asyncHandler } from "../utils/asynchandler.js"
import { ApiError } from "../utils/ApiError.js"
import ApiResponse from "../utils/apiResponse.js"
import { Logs } from "../models/logs.model.js"
import { Student } from "../models/student.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const getLogs =(asyncHandler(async(req,res)=>{
    // console.log(req.session);
    // if (!req.session.email) {
    //     return res.status(401).send("Unauthorized: No session found");
    // }

    // Retrieve the email from the session
    const email =req.body.email|| req.session.email;
    console.log(email);
    // console.log(req.session);
    const logs=await Logs.find({email});
    if(logs){
        res.status(201)
        .json(
            new ApiResponse(201, logs, "log created successfully")
        )
    }
    else{
    res.status(400).send("No Logs found");
    }
}))

const getLog = asyncHandler(async (req, res) => {
    // Ensure a session exists
    if (!req.session.email) {
        return res.status(401).send("Unauthorized: No session found");
    }

    // Get the log ID from the request parameters
    // console.log(req.params.id);
    const logId =new mongoose.Types.ObjectId(req.params.id);

    // const _id= new ObjectId(logId);

    // Validate if it's a valid ObjectId
    // if (!mongoose.Types.ObjectId.isValid(logId)) {
    //     return res.status(400).send("Invalid log ID");
    // }

    // Find the log by its ObjectId
    const logs = await Logs.findOne(logId);

    if (logs) {
        res.status(200).json(new ApiResponse(200, logs, "Log retrieved successfully"));
    } else {
        res.status(404).send("No log found");
    }
});

const insertLog =(asyncHandler(async(req,res)=>{

    if (!req.session.email) {
        return res.status(401).send("Unauthorized: No session found");
    }

    // Retrieve the email from the session
    const email = req.session.email;

    const student =await Student.findOne({email});

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    student.attendance.push(formattedDate);

    await student.save();

    const {fullName,roll_no}=student;
    // console.log(req.files);

    const {title,description}=req.body;
    let photos=[];
        for(let i=0;i<req.files.length;i++){
            photos.push( req.files[i].path);
        }

    const photo=await uploadOnCloudinary(photos);
    console.log(photo);

    const log=await Logs.create({
        fullName,
        email,
        roll_no,
        title,
        description,
        photos:photo
    })

    if(log){
        console.log("log created successfully");
        res.status(201)
        .json(
            new ApiResponse(201, log, "log created successfully")
        )

    }
    else{
        throw new ApiError(500, "server side error on creating log!");
    }
}))

export{
    getLogs,
    getLog,
    insertLog
}