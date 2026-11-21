import AboutSmallCard from "../components/AboutSmallCard";
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <>
      <section className="bg-gray-500 min-h-screen">
        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Shopping experience"
                className="w-full h-64 sm:h-80 md:h-[450px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-indigo-700 font-semibold uppercase tracking-widest text-sm">
                Who We Are
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Welcome to BShop
              </h2>

              <p className="text-gray-200 leading-7 mb-4">
                BShop is an online shopping platform created to make finding
                quality products easier, faster, and more enjoyable. We believe
                shopping should be simple, convenient, and accessible to
                everyone.
              </p>

              <p className="text-gray-200 leading-7 mb-6">
                From everyday essentials to products you'll love, we aim to
                bring together quality, value, and a smooth shopping experience
                in one place.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg">Quality</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Products you can trust
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Convenience
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Shopping made easier
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-16">
            <AboutCard
            icon = "🎯"
              heading="Our Mission"
              text="Our mission is to provide customers with a reliable and
                user-friendly online shopping experience, offering quality
                products at reasonable prices while prioritizing customer
                satisfaction."
            />
            <AboutCard
            icon = "🚀"
              heading="Our Vision"
              text="Our vision is to become a trusted online shopping destination
                where customers can discover great products, shop with confidence,
                and experience convenience every time they visit."
            />
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 md:mt-24 text-center">
            <span className="text-indigo-600 font-semibold uppercase tracking-widest text-sm">
              Why BShop
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Why Choose Us?
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-7">
              We focus on making every part of your shopping journey simple,
              convenient, and enjoyable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <AboutSmallCard
                icon="🛍️"
                title="Wide Collection"
                description="Explore a variety of products in one convenient shopping destination."
              />
              <AboutSmallCard
                icon="💰"
                title="Great Value"
                description="Find products that offer a balance of quality, style, and affordability."
              />
              <AboutSmallCard
                icon="🤝"
                title="Customer First"
                description="Your satisfaction and shopping experience are at the heart of everything we do."
              />
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 md:mt-24 bg-indigo-950 rounded-2xl px-6 py-12 sm:px-10 sm:py-16 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Discover Something You Love
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-7">
              Thank you for choosing BShop. We're here to make your shopping
              experience better, one product at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
