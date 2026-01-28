import { asyncHandler } from "../utils/asynchandler.js"
import { ApiError } from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import { Student } from "../models/student.model.js"

import axios from "axios"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const studentRegister = asyncHandler(async (req, res) => {
    const { fullName, email, roll_no, password } = req.body;

    if (
        [fullName, email, roll_no, password].some(field => field === undefined)
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const searchStudent = await Student.findOne({ email });
    if (searchStudent) {
        throw new ApiError(400, "Email Id already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
        fullName,
        email,
        roll_no,
        password: hashedPassword,

    });

    if (student) {
        console.log("Student registered successfully");
        res.status(201)
            .json(
                new ApiResponse(201, student, "student created successfully")
            )

    }
    else {
        throw new ApiError(500, "server side error on creating user !");
    }

})

const studentLogin = asyncHandler(async (req, res) => {
    // console.log(req.body);  // Log req.body to see what is being sent

    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).send("All fields are required");
    }

    // Find student by email
    const student = await Student.findOne({ email });
    if (!student) {
        return res.status(400).send("Incorrect Credentials");
    }

    // Compare the password
    const result = await bcrypt.compare(password, student.password);
    if (result) {
        const token = await jwt.sign({ username: student.fullName, email: student.email }, "VOp2tCqr1f", { expiresIn: '8h' });
        // console.log(token);
        await res.cookie('auth_token', token, {
            httpOnly: true, secure: true,
            sameSite: "none", path: "/"
        });

        // req.session.email = email;
        // console.log(req.session);
        // Successful login, redirect to logs
        res.status(201)
            .json(
                new ApiResponse(201, student, "student created successfully")
            )
    } else {
        res.status(400).send("Incorrect Credentials");
    }
});

const studentLogOut = asyncHandler(async (req, res) => {
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



const getStudentName = asyncHandler(async (req, res) => {
    // For GET requests, we rely entirely on the token-decoded email attached by the middleware
    const email = req.user_email;

    if (!email) {
        throw new ApiError(400, "Email is required");
    }

    const student = await Student.findOne({ email });

    if (!student) {
        throw new ApiError(404, "Student not found");
    }

    res.status(200).json(
        new ApiResponse(200, { fullName: student.fullName }, "Student name fetched successfully")
    );
});

export {
    studentRegister,
    studentLogin,
    studentLogOut,
    getStudentName
}
