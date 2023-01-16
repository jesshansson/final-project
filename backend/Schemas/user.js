import mongoose from "mongoose";
import crypto from "crypto"

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  age: {
    type: Number
  },
  presentation: {
    type: String,
    trim: true,
    minlength: 10,
    maxlength: 250
  },
  facebook: {
    type: String
  },
  instagram: {
    type: String
  },
  // bookmark: [
  //   {type: mongoose.Schema.Types.ObjectId,
  //     ref: "Culture"}
  // ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  profileImage: {
    type: String
  }
});