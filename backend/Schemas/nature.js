import mongoose from "mongoose";
import crypto from "crypto"

export const NatureSchema = new mongoose.Schema({
  name: {
    type: String
  },
  img: {
    type: String
  },
  googlemap: {
    type: String
  },
  description: {
    type: String
  },
  beach: {
    type: String
  },
  closestStation: {
    type: String
  },
  strollerFriendly: {
    type: String
  },
  cafe: {
    type: String
  },
  barbecuePossibility: {
    type: String
  },
  highlights: {
    type: String
  },
  toilet: {
    type: String
  },
  activities: {
    type: String
  },
  visitors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});
