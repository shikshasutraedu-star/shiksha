import React, { useContext } from 'react';
import { X, User, HelpCircle, Settings, CreditCard, Library, Shield, LogOut } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const NavigationMenu: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen, isLoggedIn, isGuest, setIsLoggedIn, setIsGuest, setCurrentPage } = useContext(AppContext);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-purple-600">Menu</h3>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4">
            {isLoggedIn && (
              <button className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition">
                <User className="w-5 h-5 text-purple-600" />
                <span>Edit Profile</span>
              </button>
            )}
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              <span>Ask Doubt</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition">
              <Settings className="w-5 h-5 text-purple-600" />
              <span>Customer Support</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span>Subscription</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition">
              <Library className="w-5 h-5 text-purple-600" />
              <span>E-Library</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition">
              <Shield className="w-5 h-5 text-purple-600" />
              <span>Privacy Policy</span>
            </button>
            {(isLoggedIn || isGuest) && (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsGuest(false);
                  setCurrentPage('welcome');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 rounded-lg transition text-red-600"
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
