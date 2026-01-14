import React, { useContext } from 'react';
import { Menu, ChevronRight, BookOpen, Award } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const HomePage: React.FC = () => {
  const { setIsMenuOpen, setCurrentPage, isGuest, userProfile } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Shiksha Sutra</h1>
          <div className="w-6" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome, {isGuest ? 'Guest' : userProfile.name || 'Student'}!</h2>
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Get Started</h3>
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => setCurrentPage('class-selection')}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center"
            >
              Select Class & Language
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md">
            <BookOpen className="w-8 h-8 mb-2" />
            <h4 className="font-semibold">Continue Learning</h4>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-xl shadow-md">
            <Award className="w-8 h-8 mb-2" />
            <h4 className="font-semibold">Achievements</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
