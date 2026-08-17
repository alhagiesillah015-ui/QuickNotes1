import React, { useState } from "react";
import { Notebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      return setError("Please enter your email and password");
    }

    try {
      setLoading(true);

      await login(email, password);

      navigate("/dashboard");
    } catch (err) {
      setError(
        "Failed to sign in: " +
          (err.message || "Please check your email and password")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

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

          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

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
                placeholder="you@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                placeholder="********"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200 shadow-md disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;