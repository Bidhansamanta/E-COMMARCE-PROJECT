import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies.refreshToken ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res
        .status(400)
        .json({ msg: "Unauthorized User Please Login First" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const newUser = await User.findById(decodedToken?.id);

    if (!newUser) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    req.user = newUser;
    next();
  } catch (error) {
    console.log(`Error while creating User ${error.message}`);
  }
};

const checkRole = async (req, res, next) => {
  try {
    const { user } = req;

    if (user.role === "admin") {
      next();
    } else {
      return res.status(400).json({ msg: "Unauthorized User" });
    }
  } catch (error) {
    console.log(`Error while creating admin ${error.message}`);
  }
};

export { verifyJWT, checkRole };
