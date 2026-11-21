import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavLink, useParams } from "react-router-dom";

function ProductDetails() {
  const product = useContext(ProductContext);
  console.log(product);
  const { id } = useParams();
  const item = product?.find((curElem) => curElem._id === id);

  if (!item) {
    return (
      <h2 className="text-center mt-10 text-2xl font-semibold text-gray-500">
        Product Not Found
      </h2>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 md:pt-8 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-2xl p-5 md:p-10 shadow-sm border border-gray-300">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center h-[350px] sm:h-[450px] md:h-[500px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {item.title}
            </h2>

            <div className="mb-4">
              <span className="text-xs font-semibold bg-red-300 px-4 py-2 rounded-full uppercase tracking-wider text-indigo-900">
                {item.category}
              </span>
            </div>

            <p className="text-base text-gray-500 leading-7 mb-6">
              {item.description}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ₹{Number(item.price).toFixed(2)}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <p className="text-sm text-gray-500">
                ✨ Carefully selected product with quality and style.
              </p>
            </div>
            <div>
              <button className="bg-blue-500 max-w-30 px-4 py-2 rounded-lg text-white font-semibold mr-30">
                Add To Cart
              </button>
              <NavLink to="/products">
                <button className="bg-gray-600 max-w-30 px-4 py-2 mt-5 rounded-lg text-white font-semibold">
                Go Back
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
