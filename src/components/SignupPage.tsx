import React from 'react';
import { ArrowLeft } from 'lucide-react';

type Props = {
  setIsLoggedIn: (v: boolean) => void;
  setUserProfile: (p: any) => void;
  setCurrentPage: (p: string) => void;
  appData: any;
};

const SignupPage: React.FC<Props> = ({ setIsLoggedIn, setUserProfile, setCurrentPage, appData }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Create Account</h2>
      <div className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none">
          <option value="">Select Class</option>
          {appData.classes.map((cls: string) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
        <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none">
          <option value="">Select Language</option>
          {appData.languages.map((lang: string) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        <input type="date" placeholder="Date of Birth" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <input type="text" placeholder="District" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <input type="text" placeholder="State" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none" />
        <button
          onClick={() => {
            setIsLoggedIn(true);
            setUserProfile({ name: 'New Student' });
            setCurrentPage('home');
          }}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Register
        </button>
      </div>
      <button onClick={() => setCurrentPage('login')} className="mt-4 text-gray-600 hover:text-gray-800 flex items-center">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
      </button>
    </div>
  </div>
);

export default SignupPage;
