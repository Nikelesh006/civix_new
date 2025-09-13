import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleLoginSubmit = (formData) => {
    console.log('Login submitted:', formData);
    // Add your login logic here
  };

  const handleSignupSubmit = (formData) => {
    console.log('Signup submitted:', formData);
    // Add your signup logic here
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen w-full p-5"
      style={{
        fontFamily: '"Poppins", sans-serif',
        background: 'url("/parliment1.png") center/cover no-repeat fixed',
        minHeight: '100vh'
      }}
    >
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      
      <div className="bg-white rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] overflow-hidden w-full max-w-4xl min-h-[550px] flex relative backdrop-blur-sm">
        {/* Left Panel - Brand Section */}
        <div 
          className="flex-1 bg-slate-700 flex flex-col items-center justify-center text-center text-white px-10 py-15 relative md:block hidden"
          style={{
            clipPath: 'polygon(0 0, 80% 0, 95% 100%, 0% 100%)'
          }}
        >
          <div className="flex flex-col items-center mb-10">
            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-crown text-slate-700 text-3xl"></i>
            </div>
            <span className="text-3xl font-bold text-white tracking-widest">CIVIX</span>
          </div>
          
          <p className="text-sm leading-relaxed mb-10 opacity-80 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Panel - Form Section */}
        <div className="flex-1 px-12 py-15 flex flex-col justify-center relative bg-white md:px-12 px-6">
          <div className={`transition-all duration-600 ${isSignUpMode ? 'opacity-0 translate-x-full pointer-events-none' : 'opacity-100 translate-x-0 pointer-events-auto'}`}>
            <Login onSubmit={handleLoginSubmit} onSwitchToSignup={handleSignUpClick} />
          </div>
          
          <div className={`absolute top-0 left-0 right-0 bottom-0 px-12 py-15 flex flex-col justify-center transition-all duration-600 md:px-12 px-6 ${isSignUpMode ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
            <Signup onSubmit={handleSignupSubmit} onSwitchToLogin={handleSignInClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
