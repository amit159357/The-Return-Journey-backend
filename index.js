// Import required modules
import express from "express";
import dotenv from "dotenv";
import ProductRouter from "./src/route/products.js";
import connectDB from "./src/configs/dbConnect.js";
import cors from "cors"
// Create an Express application
const app = express();
dotenv.config();
await connectDB();
const port = process.env.PORT || 6969;


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello The Return Jounrey!Hurray The backend is working fine");
});

app.use("/api/v1/products", ProductRouter);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
