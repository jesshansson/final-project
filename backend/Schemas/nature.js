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
    type: Boolean
  },
  closestStation: {
    type: String
  },
  strollerFriendly: {
    type: Boolean
  },
  cafe: {
    type: Boolean
  },
  barbecuePossibility: {
    type: Boolean
  },
  highlights: {
    type: String
  },
  toilet: {
    type: Boolean
  },
  activities: {
    type: String
  },
});
