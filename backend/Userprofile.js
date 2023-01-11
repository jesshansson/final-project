import { UserSchema } from "./Schemas/user";
import mongoose from "mongoose";

const User = mongoose.model("User", UserSchema);

export const SingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const queriedUser = await User.findById(id)
      .populate("post")
      .populate("image")
    if (queriedUser) {
      res.status(201).json({ response: queriedUser, success: true });
    } else {
      res.status(404).json({ response: "User not found", success: false });
    }
  } catch (error) {
    res.status(400).json({ error: error, success: false });
  }
};

export const EditUser = async (req, res) => {
  const updatedUserInfo = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updatedUserInfo }, //The $set operator replaces the value of a field with the specified value
      {
        new: true,
      }
    );
    if (updatedUser) {
      res.status(200).json({
        response: updatedUser,
        success: true,
      });
    } else {
      res.status(404).json({ response: "User not found", success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

export const DeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({ response: deleteUser, success: true });
  } catch (error) {
    res.status(400).json({ error: "User not found", success: false });
  }
};

