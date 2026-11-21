import { NavLink } from "react-router-dom";

function Card({ item }) {
  const { _id,title, description, category, price, image } = item;
  // console.log(_id);


  return (
    <NavLink to={`/product/${_id}`}>
      <div className="group max-w-sm bg-gray-200 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
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
            <span className="text-xs font-semibold bg-red-300 px-4 py-2 rounded-full uppercase tracking-wider text-indigo-900">
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
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
