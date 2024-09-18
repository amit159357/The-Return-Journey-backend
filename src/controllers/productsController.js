import { ProductModel } from "../models/products.js";

const GetProductsController = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default values for page and limit
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    if (pageNumber < 1 || pageSize < 1) {
      return res.status(400).json({ message: "Invalid page or limit value" });
    }

    // Calculate the total count of documents
    const totalCount = await ProductModel.countDocuments();

    // Get the paginated data
    const products = await ProductModel.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      data: products,
      totalCount,
      message: "Data Fetched successfully",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Route to get all product documents
export { GetProductsController };
