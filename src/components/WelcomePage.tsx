import React, { useContext } from 'react';
import logo from "../assets/1768138402643.jpg";
import { AppContext } from '../context/AppContext';

const WelcomePage: React.FC = () => {
  const { setCurrentPage, setIsGuest } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="text-center text-white animate-fade-in">
        <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-2xl">
          <img src={logo} alt="logo" className="w-31 h-31 object-contain rounded-full" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Shiksha Sutra</h1>
        <p className="text-xl mb-8 italic">"Bridging the Gap between Language and Learning"</p>
        <div className="space-y-4">
          <button
            onClick={() => setCurrentPage('login')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 w-64"
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsGuest(true);
              setCurrentPage('home');
            }}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-white hover:text-purple-600 transition-all hover:scale-105 w-64 block mx-auto"
          >
            Explore as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
