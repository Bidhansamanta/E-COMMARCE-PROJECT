import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const URL = "http://localhost:8005/api/v1/product/create-product";

  function onsubmitHandler(e) {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then(() =>
        setProduct({
          title: "",
          description: "",
          price: "",
          image: "",
          category: "",
        }),
      )
      .catch((error) => console.log(error));
  }

  return (
    <form className="max-w-md mx-auto p-6 space-y-4" onSubmit={onsubmitHandler}>
      <h1 className="text-center font-bold text-3xl">Add Products</h1>
      <input
        type="text"
        placeholder="Product title..."
        name="title"
        required
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Product description..."
        rows="3"
        required
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Image URL"
        required
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        name="price"
        placeholder="Product price..."
        required
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="category"
        required
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
        placeholder="Product category..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-700 px-4 py-2 text-center text-white font-semibold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}

export default AddProduct;
