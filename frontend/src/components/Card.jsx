function Card({ item }) {
  const { title, description, category, price, image } = item;

  return (
    <div className="group max-w-sm bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Product Image */}
      <div className="w-full h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      <div className="p-5">

        <div className="mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            {category}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl font-bold text-gray-900">
            ₹{Number(price).toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 active:scale-95 transition-all duration-300 cursor-pointer">
          + Add to Cart
        </button>

      </div>
    </div>
  );
}

export default Card;