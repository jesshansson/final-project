import mongoose from "mongoose";

export const CultureSchema = new mongoose.Schema({

  name: {
    type: String
  },
  img: {
    type: String,
  },
  address: {
    type: String
  },
  googlemap: {
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
    type: String
  },
  openingHours: {
    type: String
  },
  genre: {
    type: String
  },
  opening_hours_mon: {
    type: String
  },
  opening_hours_tue: {
    type: String
  },
  opening_hours_wed: {
    type: String
  },
  opening_hours_thu: {
    type: String
  },
  opening_hours_fri: {
    type: String
  },
  opening_hours_sat: {
    type: String
  },
  opening_hours_sun: {
    type: String
  }, 
   visitors: [
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
     }
   ]

})