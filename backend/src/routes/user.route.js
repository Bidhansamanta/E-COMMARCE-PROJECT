import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { loginValidator, registrationValidator } from "../validators/user.validator.js";

const router = express.Router();

router.route("/register-user").post(registrationValidator(),registerUser);
router.route("/login-user").post(loginValidator(),loginUser);


export default router;