import { useState } from "react";

function Login() {
  const [userInfo, setUserInfo] = useState({
    phoneNumber: "",
    password: "",
  });

  const URL = "http://localhost:8005/api/v1/user/login-user";

  function onSubmitHandler(e) {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then(() => setUserInfo({ phoneNumber: "", password: "" }))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Side */}
          <div className="hidden md:flex flex-col justify-between bg-gray-900 text-white p-12">
            <div>
              <h1 className="text-3xl font-bold tracking-wide">
                BShop<span className="text-orange-500">.</span>
              </h1>

              <p className="text-gray-400 mt-3">Your Shopping, Your Style.</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold leading-tight mb-5">
                Discover Your
                <span className="text-orange-500"> Perfect Style.</span>
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Join BShop today and explore amazing products, exclusive deals,
                and a better shopping experience.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              © 2026 BShop. All rights reserved.
            </p>
          </div>

          {/* Right Side */}
          <div className="p-6 sm:p-10 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Login Account
              </h2>

              <p className="text-gray-500 mt-2">
                Please enter your details to get started.
              </p>
            </div>

            {/* Sign Up Form */}
            <form className="space-y-5" onSubmit={onSubmitHandler}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  value={userInfo.phoneNumber}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-7">
              Already have an account?
              <span className="text-orange-500 font-semibold cursor-pointer hover:underline ml-1">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
