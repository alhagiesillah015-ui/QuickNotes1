import React, { useState } from "react";
import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">

          <Notebook className="h-12 w-12 text-indigo-600 mb-2" />

          <h2 className="text-2xl font-bold text-gray-900">
            Welcome Back
          </h2>

          <p className="text-gray-600">
            Sign in to access your notes
          </p>
            </div>
          <form onSubmit={handleSubmit} className="w-full mt-6">

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="**********"
                required
              />
            </div>

            <button
              className="w-full bg-indigo-500 text-white
               py-3 px-4 rounded-lg font-semibold hover:bg-indigo-600 transition 
               duration-200 shadow-md mt4"
              type="submit"
            >
              Sign in
            </button>
          </form>

          <div className="mt-4">
            <p className="text-gray-600">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>

  );
}

export default Login;