import mongoose from "mongoose";

const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Author = mongoose.model("Authors", authorSchema);

export { Author };
