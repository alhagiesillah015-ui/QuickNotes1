import React, { useState } from "react";
import { Notebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    
    if (!email || !password || !confirmPassword) {
      return setError("Please fill in all fields");
    }

  
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

    
      await signup(email, password);

    
      navigate("/dashboard");

    } catch (err) {
      setError("Failed to creat account:"+ (err.messsage)||
    ("Please try again"));

      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-lg shadow-md p-8">

          {/* Logo and heading */}
          <div className="flex flex-col items-center mb-6">

            <Notebook className="h-12 w-12 text-indigo-600 mb-2" />

            <h2 className="text-2xl font-bold text-gray-900">
              Create Your Account
            </h2>

            <p className="text-gray-600">
              Start taking your notes today
            </p>

          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Signup form */}
          <form
            onSubmit={handleSubmit}
            className="w-full"
          >

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
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="********"
                required
              />

            </div>

            {/* Confirm Password */}
            <div className="mb-4">

              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="********"
                required
              />

            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading
                ? "Creating Account..."
                : "Sign Up"}
            </button>

          </form>

          {/* Login link */}
          <div className="mt-4 text-center">

            <p className="text-gray-600">
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign In
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;