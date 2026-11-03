import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0">
        <div className="flex flex-col md:flex-row justify-between items-center md:h-[60px] gap-3 md:gap-0">
          <div className="w-full md:w-auto flex justify-between items-center">
            <div className="cursor-pointer">
              <h1 className="text-lg md:text-xl font-bold tracking-wide">
                B<span className="text-blue-400">Shop</span>
              </h1>
            </div>
          </div>
          <div className="w-full md:flex-1 md:max-w-md md:mx-8">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-4 py-1.5 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-1.5 text-sm font-medium hover:text-blue-300 transition-colors">
              <Link to= "/signup" >Sign Up</Link>
            </button>
            <button className="px-4 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
