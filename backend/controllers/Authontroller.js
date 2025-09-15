const {UserModel} = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing" });
    }
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing" });
    }
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: "Incorrect password or Email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(200)
      .json({ message: "Login successful", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
