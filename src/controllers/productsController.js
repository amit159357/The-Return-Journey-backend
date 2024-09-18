import { ProductModel } from "../models/products.js";

const GetProductsController = async (req, res) => {
  try {
 
    const titles = await ProductModel.find();
    res
      .status(200)
      .json({ data: titles, message: `Data Fetched successfully` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
// Route to get all title documents
export { GetProductsController };
