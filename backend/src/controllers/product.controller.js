import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Genarate SKU
const genarateSkU = async (category) => {
  const count = await Product.countDocuments({ category: category });
  return `${category.toUpperCase()}-${String(count + 1).padStart(4, "0")}`;
};

// Create Product
const createProduct = asyncHandler(async (req, res) => {
  try {
    const { title, description, price, category, image } = req.body;

    const isProductAlreadyExits = await Product.findOne({ title, description });

    if (isProductAlreadyExits) {
      return res.status(409).json({ msg: "This Product are already Exits" });
    }

    const sku = await genarateSkU(category);

    const newProduct = await Product.create({
      title,
      description,
      price,
      category,
      image,
      sku,
    });

    return res
      .status(201)
      .json({ msg: "Product Created Successfully", newProduct });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
});

// Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json({ msg: "All Products", allProducts });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
});

// Get Product By Id
const getProductById = asyncHandler(async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(404).json({ msg: "Product Id not found" });
    }

    const product = await Product.findById(productId);

    return res.status(200).json({ msg: "Product Fetch Successfully", product });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Update Product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(404).json({ msg: "Product Id not found" });
    }

    const product = await Product.findByIdAndUpdate(
      productId,
      { $set: req.body },
      { returnDocument: "after", runValidators: true },
    );

    return res
      .status(200)
      .json({ msg: "Product Updated Successfully", product });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
});

// Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(404).json({ msg: "Product Id not found" });
    }

    const product = await Product.findByIdAndDelete(productId);

    return res
      .status(200)
      .json({ msg: "Product Deleted Successfully", product });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error });
  }
});

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
