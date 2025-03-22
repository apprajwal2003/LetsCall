import { User } from "../models/user.model.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  try {
    const signupDetails = req.body;

    const existingUser = await User.findOne({
      username: signupDetails.username,
    });

    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(signupDetails.password, 10);

    const newUser = new User({
      name: signupDetails.name,
      username: signupDetails.username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(httpStatus.CREATED).json({ message: "User signup successful!" });
  } catch (e) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong: ${e}` });
  }
};

export default signUp;
