import { Router } from "express";
import { login,signUp, verifiedUser } from "../controllers/login.controller.js";

const authRouter = Router();

authRouter.route("/login").post(login);
authRouter.route("/signUp").post(signUp);
authRouter.route('/verify').post(verifiedUser)

export default authRouter;