import { Router } from "express";
import { studentLogin, studentLogOut, studentRegister } from "../controllers/student.controller.js";
import jwtAuth from "../middlewares/auth.middleware.js";

const studentRouter=Router();

studentRouter.route("/student_register").post(studentRegister);
studentRouter.route("/login").post(studentLogin);
studentRouter.route("/logOut").post(studentLogOut);

export default studentRouter;