import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const LanguageSelectPage: React.FC = () => {
  const { setUiLanguage, setCurrentPage, isLoggedIn, isGuest } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-indigo-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Choose Language / ଭାଷା ଚୟନ କରନ୍ତୁ</h2>
        <div className="space-y-3">
          <button
            onClick={() => {
              if (!isLoggedIn && !isGuest) {
                setCurrentPage('login');
                return;
              }
              setUiLanguage('en');
              setCurrentPage('quiz');
            }}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg"
          >English</button>
          <button
            onClick={() => {
              if (!isLoggedIn && !isGuest) {
                setCurrentPage('login');
                return;
              }
              setUiLanguage('od');
              setCurrentPage('quiz');
            }}
            className="w-full py-3 bg-green-600 text-white rounded-lg"
          >Odia (ଓଡ଼ିଆ)</button>
        </div>
        <div className="mt-4 text-sm text-gray-600">You can change language anytime from Home.</div>
      </div>
    </div>
  );
};

export default LanguageSelectPage;
