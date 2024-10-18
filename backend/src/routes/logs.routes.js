import { Router } from "express";
import jwtAuth from "../middlewares/auth.middleware.js";
import { getLog, getLogs, insertLog } from "../controllers/logs.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const logRouter=Router();

logRouter.route("/getLogs").post(getLogs);
logRouter.route("/add_log").post(jwtAuth,upload.array('photos'),insertLog);
logRouter.route("/getLog/:id").get(jwtAuth,getLog);


export default logRouter;