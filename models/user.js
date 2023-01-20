import { model, Schema } from "mongoose";
import validator from "validator";
import Project from "./project.js";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (v) => v.length <= 12,
        message: "User name should consist maximum of 12 characters",
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [
        validator.isEmail,
        "This email doesn't look like email at all",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    projects: [Project.schema],
  },
  { timestamps: true }
);

const User = new model("user", userSchema);
export default User;
