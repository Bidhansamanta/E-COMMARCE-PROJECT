import mongoose from "mongoose";


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Data Base Connected Successfully`);
  } catch (error) {
    console.log(`Error while creating Data Base ${error.message}`);
  }
}

export default connectDB;