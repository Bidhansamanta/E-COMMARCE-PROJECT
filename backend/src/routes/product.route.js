import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";
import { checkRole, verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

router.route("/create-product").post(createProduct);
router.route("/all-products").get(verifyJWT, checkRole, getAllProducts);
router.route("/all-products/:productId").get(getProductById);
router.route("/update-product/:productId").put(updateProduct);
router.route("/delete-product/:productId").delete(deleteProduct);

export default router;
