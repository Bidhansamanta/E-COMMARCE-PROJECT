import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:h-[60px] py-2 md:py-0">
          {/* Logo */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <h1 className="text-lg md:text-xl font-bold tracking-wide">
              B<span className="text-blue-400">Shop</span>
            </h1>

            {/* Mobile Buttons */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/signup"
                className="px-3 py-1.5 text-sm font-medium hover:text-blue-300"
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="px-4 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="w-full md:flex-1 md:max-w-md md:mx-8">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-4 py-1.5 rounded-lg text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/signup"
              className="px-4 py-1.5 text-sm font-medium hover:text-blue-300"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              className="px-4 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
