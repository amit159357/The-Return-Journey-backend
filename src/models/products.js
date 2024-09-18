import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Ensures the title field is required
  },
});

// Create a Mongoose model based on the schema
const ProductModel = mongoose.model("product", mySchema);
export {ProductModel}
