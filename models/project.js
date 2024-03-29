import { model, Schema } from "mongoose";
import Goal from "./goal.js";

const projectSchema = new Schema(
  {
    projectName: {
      type: "String",
      maxLength: 20,
      required: true,
    },
    description: {
      type: "String",
      maxLength: 200,
      required: true,
    },
    goals: [Goal.schema],
    sessions: {
      type: Array,
      default: [
        { argument: "Medium", value: 0, seconds: 10 },
        { argument: "Long", value: 0, seconds: 15 },
        { argument: "Short", value: 0, seconds: 5 },
      ],
    },
    totalWorkTime: {
      type: Number,
      min: 0,
      default: 0,
    },
    userId: String,
    note: {
      type: String,
      default: "Edit me",
      maxLength: 200,
    },
  },

  { timestamps: true }
);

const Project = new model("project", projectSchema);

export default Project;
