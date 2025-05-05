import { Router } from "express";
import { login,signUp } from "../controllers/login.controller.js";

const authRouter = Router();

authRouter.route("/login").post(login);
authRouter.route("/signUp").post(signUp);

export default authRouter;