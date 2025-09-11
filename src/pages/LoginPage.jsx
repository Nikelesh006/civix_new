import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react"; 

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96 border border-white/20">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white">Welcome Back</h1>
        <p className="text-gray-300 text-center mb-8">
          Sign in to continue your civic journey
        </p>

        {/* Form */}
        <h2 className="text-xl font-semibold text-white mb-6 text-center">Sign In</h2>
        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Demo Note */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/30 text-blue-200 text-sm rounded-lg p-4 text-center">
          <span className="font-semibold">Demo Login:</span> Use any email and
          password to explore the platform
        </div>
      </div>
    </div>
  );
}
