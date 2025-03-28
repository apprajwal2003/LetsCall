import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import crypto from "crypto";

const login = async (req, res) => {
  try {
    const loginDetails = req.body;

    const existingUser = await User.findOne({
      username: loginDetails.username,
    });

    if (!existingUser) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User does not exist" });
    }

    if (await bcrypt.compare(loginDetails.password, existingUser.password)) {
      let token = await crypto.randomBytes(20).toString("hex");
      existingUser.token = token;
      await existingUser.save();
      res
        .status(httpStatus.OK)
        .json({ message: `User login successful! ${token}`, token: token });
      return;
    } else {
      res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Incorrect Username or Password!" });
    }
  } catch (e) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong: ${e}` });
  }
};

export default login;
