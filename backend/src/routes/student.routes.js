import { Router } from "express";
import { studentLogin, studentLogOut, studentRegister, getStudentName } from "../controllers/student.controller.js";
import jwtAuth from "../middlewares/auth.middleware.js";

import passport from "passport";
import jwt from "jsonwebtoken";

const studentRouter = Router();

studentRouter.route("/student_register").post(studentRegister);
studentRouter.route("/login").post(studentLogin);
studentRouter.route("/logOut").post(studentLogOut);
studentRouter.route("/get_name").get(jwtAuth, getStudentName);

// Google OAuth Routes
studentRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

studentRouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/student/login', session: false }),
    async (req, res) => {
        const frontendUrl = process.env.ORIGIN || "http://localhost:5173";

        const student = req.user;

        // Generate Token
        const token = jwt.sign(
            { username: student.fullName, email: student.email },
            process.env.JWT_SECRET || "VOp2tCqr1f",
            { expiresIn: '8h' }
        );

        // Set Cookie
        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: false,       // Set to false for HTTP localhost
            sameSite: "lax",     // Set to lax for HTTP localhost
            path: "/"
        });

        // Redirect to logs
        res.redirect(`${frontendUrl}/student/logs`);
    }
);

export default studentRouter;