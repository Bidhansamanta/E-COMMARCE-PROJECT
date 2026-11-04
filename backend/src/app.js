import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Data Base Route
import connectDB from "./dbConnect/connectDB.js";

// User Route
import userRouter from "./routes/user.route.js";

dotenv.config({
  path: "./.env",
});

const app = express();

// Fronted-Backend Connect Route
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.use(cookieParser());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.disable("x-powered-by");

const PORT = process.env.PORT || 7000;

// Data Base Call
connectDB();

// User Route Call
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server at Running is PORT Number : ${PORT}`);
});
