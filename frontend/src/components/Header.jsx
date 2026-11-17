import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative flex justify-around items-center h-[60px] px-4 sm:px-6 md:px-10 shadow-md bg-white">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-gray-700"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <i
            className={`fa-solid ${
              isOpen ? "fa-xmark" : "fa-bars"
            }`}
          ></i>
        </button>

        {/* Navigation */}
        <nav>
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 lg:gap-20 text-md font-bold absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 z-50`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-900" : "text-black"
                }
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-900" : "text-black"
                }
                to="/shop"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-900" : "text-black"
                }
                to="/categories"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-900" : "text-black"
                }
                to="/deals"
                onClick={() => setIsOpen(false)}
              >
                Deals
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-900" : "text-black"
                }
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User, Wishlist and Cart */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 text-gray-700 text-lg">
          <NavLink to="/profile" aria-label="User Profile">
            <i className="fa-solid fa-user"></i>
          </NavLink>

          <NavLink to="/wishlist" aria-label="Wishlist">
            <i className="fa-solid fa-heart"></i>
          </NavLink>

          <NavLink to="/cart" aria-label="Shopping Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>

      </header>
    </>
  );
}

export default Header;