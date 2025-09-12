import { Link } from "react-router-dom";
import parliament_bgImg from "../assets/parliament_bg.jpg";
import { loginUser } from "../api";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      localStorage.setItem("token", res.data.token); // Save JWT
      alert("Login successful!");
      navigate("/dashboard"); // redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${parliament_bgImg})` }}
    >
      <div className="flex w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Section - Branding */}
        <div className="w-1/2 bg-[#2C3E50] text-white p-10 flex flex-col justify-center items-center">
          {/* Logo / Icon */}
          <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-full mb-4">
            <span className="text-2xl">👑</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">CIVIX</h2>
          <p className="text-center text-sm text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Sign in to continue
          </p>

          <form className="space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-red-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-red-500 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
