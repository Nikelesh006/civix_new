import { Link } from "react-router-dom";
import { Mail, Lock, User, MapPin } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-12">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        
        {/* Header Text */}
        <h1 className="text-3xl font-bold text-center mb-1">Join the Movement</h1>
        <p className="text-center text-gray-400 mb-8">
          Create your account and start making a difference
        </p>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm mb-1">Role</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <select className="w-full bg-transparent outline-none text-white placeholder-gray-500">
                <option className="bg-gray-800">Citizen</option>
                <option className="bg-gray-800">Government Official</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm mb-1">Location</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="City, State"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-3 py-2 border border-gray-700">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Link to Login */}
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
