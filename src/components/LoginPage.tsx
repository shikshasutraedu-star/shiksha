import React, { useContext } from 'react';
import { ArrowLeft } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const LoginPage: React.FC = () => {
  const { setIsLoggedIn, setUserProfile, setCurrentPage } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Welcome Back!</h2>
        <div className="space-y-4">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
          <button
            onClick={() => {
              setIsLoggedIn(true);
              setUserProfile({ name: 'Student' });
              setCurrentPage('home');
            }}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button>
          <div className="text-center space-y-2">
            <button className="text-purple-600 hover:underline block w-full">Forgot Password?</button>
            <button onClick={() => setCurrentPage('signup')} className="text-purple-600 hover:underline block w-full font-semibold">
              Sign Up - New User
            </button>
          </div>
        </div>
        <button onClick={() => setCurrentPage('welcome')} className="mt-4 text-gray-600 hover:text-gray-800 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
