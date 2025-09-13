import React, { useState } from 'react';

const Login = ({ onSubmit, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log('Login attempt:', formData);
  };

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-700 mb-2">Welcome Back!</h2>
        <p className="text-gray-500 text-sm">Sign in to continue</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="email" 
            name="email"
            className="w-full py-3 px-5 border border-gray-200 rounded-full text-sm transition-all duration-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(231,76,60,0.1)] placeholder-gray-400"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="password" 
            name="password"
            className="w-full py-3 px-5 border border-gray-200 rounded-full text-sm transition-all duration-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(231,76,60,0.1)] placeholder-gray-400"
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="flex justify-between items-center mb-5 w-full flex-nowrap">
          <div className="flex items-center flex-shrink-0">
            <input 
              type="checkbox" 
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-500">Remember me</label>
          </div>
          <a href="#" className="text-red-500 no-underline text-sm font-medium flex-shrink-0 whitespace-nowrap hover:underline">Forgot Password?</a>
        </div>
        
        <button type="submit" className="w-full py-3 bg-red-500 text-white border-none rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 my-4 hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(231,76,60,0.3)]">
          Login
        </button>
        
        <div className="text-center text-gray-500 text-sm mt-5">
          Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onSwitchToSignup && onSwitchToSignup(); }} className="text-red-500 no-underline font-semibold hover:underline">Sign Up</a>
        </div>
      </form>
    </>
  );
};

export default Login;