import { asyncHandler } from "../utils/asynchandler.js"
import { ApiError } from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import { Faculty } from "../models/faculty.model.js"
import { Student } from "../models/student.model.js"
import { Logs } from "../models/logs.model.js"

import axios from "axios"
import jwt from "jsonwebtoken";

const getLogs =(asyncHandler(async(req,res)=>{
    // console.log(req.session);
    // if (!req.session.email) {
    //     return res.status(401).send("Unauthorized: No session found");
    // }

    // Retrieve the email from the session
    const email =req.body.email;
    // console.log(email);
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



const getStudents =(asyncHandler(async(req,res)=>{
    // console.log(req.session);
    let email=req.user_email;
    if (!email) {
        return res.status(401).send("Unauthorized: No session found");
        
    }

    // Retrieve the email from the session
    // const email = req.session.email;
    // console.log(req.session);
    const students=await Student.find();
    if(students){
        res.status(201)
        .json(
            new ApiResponse(201, students, " successfully")
        )
    }
    else{
    res.status(400).send("No students found");
    }
}))

const getAttendance=asyncHandler(async(req,res)=>{
    const email =req.body.email;
    const student =await Student.findOne({email});
    if(!student){
        res.send(400).send("No student found");
    }
    else{
        res.status(201)
        .json(
            new ApiResponse(201, student, " successfully")
        )
    }

})


const facultyLogin = asyncHandler(async (req, res) => {
    // console.log(req.body);  // Log req.body to see what is being sent

    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).send("All fields are required");
    }

    // Find student by email
    const faculty = await Faculty.findOne({ email });
    if (!faculty) {
        return res.status(400).send("Incorrect Credentials");
    }

    // Compare the password
    const result = faculty.password&&password;
    if (result) {
        const token =await jwt.sign({ username: faculty.fullName, email: faculty.email }, "VOp2tCqr1f", { expiresIn: '8h' });
        // console.log(token);
        await res.cookie('auth_token', token, { httpOnly: true,secure: true,
      sameSite: "none" ,domain:"dtu-72xa.onrender.com",path: "/"});
        
        // req.session.email = email;
        // console.log(req.session);
        // Successful login, redirect to logs
        res.status(201)
        .json(
            new ApiResponse(201, faculty, "student created successfully")
        )
    } else {
       res.status(400).send("Incorrect Credentials");
    }
});

const facultyLogOut = asyncHandler(async (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(400).send("Not able to logout");
    }

    // Clear cookies with same options used when setting
    res.clearCookie("connect.sid", { path: "/" });
    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
    });

    console.log("logout successful");
    return res.status(200).send("Logout successful");
  });
});


export {
    facultyLogin,
    facultyLogOut,
    getStudents,
    getLogs,
    getAttendance
}
