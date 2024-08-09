import mongoose from "mongoose";
import { GO_TO_STATUS } from "../utils/constants.js";

const BookmarkSchema = new mongoose.Schema(
  {
    destination: String, // set by user, required
    cuisineType: String, // set by user, optional
    location: {
      // get from API
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
      },
      coordinates: {
        type: [Number],
      },
    },
    ratings: Number, // get from API
    pricePerPerson: Number, // get from API
    goToStatus: {
      // set by user
      type: String,
      enum: Object.values(GO_TO_STATUS),
      default: GO_TO_STATUS.WANT_TO_GO,
    },
    // connect user with bookmark
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);
export default mongoose.model("Bookmark", BookmarkSchema);
