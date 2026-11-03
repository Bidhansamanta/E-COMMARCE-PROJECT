import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { userName, phoneNumber, password } = req.body;

    const isPhoneNumberAlreadyExits = await User.findOne({ phoneNumber });

    if (isPhoneNumberAlreadyExits) {
      throw new Error("This Phone Number is Already Exits");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      phoneNumber,
      password: hashPassword,
    });

    if (!newUser) {
      return res.status(500).json({
        msg: "Internal Server Error",
      });
    }

    return res.status(201).json({
      msg: "User Register Successfully",
      newUser,
    });
  } catch (error) {
    console.log(`Error while creating User ${error}`);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    const userInfo = await User.findOne({ phoneNumber });

    if (!userInfo) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userInfo.password);

    if (!isPasswordCorrect) {
      return res.status(409).json({ msg: "InCorrect Password" });
    }

    const refreshToken = jwt.sign(
      { id: userInfo._id },
      process.env.jwt_SECRET,
      {
        expiresIn: process.env.jwt_SECRET_IN,
      },
    );

    userInfo.refreshToken = refreshToken;
    await userInfo.save({ validateBeforeSave: false });

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, options)
      .json({ msg: "User Login Successfully", userInfo });
  } catch (error) {
    console.log(`Error while creating User ${error.message}`);
  }
});

export { registerUser, loginUser };
