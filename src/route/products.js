import express from 'express';
import { GetProductsController } from '../controllers/productsController.js';
// import from '../models/myModel.js'; // Import your Mongoose model

const router = express.Router();

router.get('/getProducts',GetProductsController);

export default router;
