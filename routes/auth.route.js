import { Router } from "express";
import { login,signUp, verifiedUser } from "../controllers/login.controller.js";
import { tokenCheck } from "../middlewares/tokenCheck.middleware.js";

const authRouter = Router();

authRouter.route("/login").post(login);
authRouter.route("/signUp").post(signUp);
authRouter.route('/verify').post(tokenCheck,verifiedUser);

export default authRouter;