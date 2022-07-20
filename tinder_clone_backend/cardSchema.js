import mongoose from "mongoose";

const tinderCardSchema = mongoose.Schema({
  name: String,
  image: String,
});
export default mongoose.model("tinderCards", tinderCardSchema);
