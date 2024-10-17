import { Router } from "express";
import jwtAuth from "../middlewares/auth.middleware.js";
import { facultyLogin, facultyLogOut, getAttendance, getLogs, getStudents } from "../controllers/faculty.controller.js";

const facultyRouter=Router();

facultyRouter.route("/login").post(facultyLogin);
facultyRouter.route("/logOut").post(facultyLogOut);
facultyRouter.route("/display_students").get(getStudents);
facultyRouter.route("/getLogs").post(getLogs)
facultyRouter.route("/get_attendance").post(getAttendance);


export default facultyRouter;