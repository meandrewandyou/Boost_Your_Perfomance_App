import { model, Schema } from "mongoose";

const goalSchema = new Schema({
  text: {
    type: String,
    maxLength: 50,
    required: true,
    immutable: true,
  },
  description: {
    type: String,
    immutable: true,
    maxLength: 200,
    defaultValue: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const Goal = new model("goal", goalSchema);
export default Goal;
