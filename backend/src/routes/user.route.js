import express from "express";
import {
  deleteUser,
  getAllUser,
  getProfile,
  getUserById,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  registrationValidator,
} from "../validators/user.validator.js";
import { checkRole, verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router.route("/register-user").post(registrationValidator(), registerUser);
router.route("/login-user").post(loginValidator(), loginUser);
router.route("/logout-user").get(verifyJWT, logoutUser);
router.route("/all-user").get(verifyJWT, checkRole, getAllUser);
router.route("/all-user/:userId").get(verifyJWT, checkRole, getUserById);
router.route("/get-profile").get(verifyJWT, getProfile);
router.route("/update-user/:userId").put(verifyJWT, updateUser);
router.route("/delete-user/:userId").delete(verifyJWT, deleteUser);

export default router;
