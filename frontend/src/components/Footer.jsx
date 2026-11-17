function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              B<span className="text-indigo-500">Shop.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 max-w-xs">
              Discover products you love. Shop your favorite
              collections and enjoy a simple shopping experience.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 hover:text-white transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 hover:text-white transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 hover:text-white transition"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 hover:text-white transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-indigo-400 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-indigo-400 transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="/deals" className="hover:text-indigo-400 transition">
                  Deals & Offers
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/contact" className="hover:text-indigo-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-indigo-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-indigo-400 transition">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-indigo-400 transition">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-indigo-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 leading-6 mb-4">
              Subscribe to receive updates about new products and special offers.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="w-full min-w-0 rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-indigo-500"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 text-sm transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

            <p className="text-center md:text-left">
              © {new Date().getFullYear()} BShop. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>

              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
