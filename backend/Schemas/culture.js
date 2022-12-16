import mongoose from "mongoose";

export const CultureSchema = new mongoose.Schema({

  name: {
    type: String
  },
  address: {
    type: String
  },
  map: {
    type: String
  },
  closestStation: {
    type: String
  },
  description: {
    type: String
  },
  website: {
    type: String
  },
  contact: {
    type: String
  },
  entranceFee: {
    type: Number
  },
  cafe: {
    type: Boolean
  },
  openingHours: {
    type: String
  },
  genre: {
    type: String
  }

})