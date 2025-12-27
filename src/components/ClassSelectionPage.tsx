import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

type Props = {
  selectedClass: string;
  setSelectedClass: (v: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (v: string) => void;
  setCurrentPage: (p: string) => void;
  appData: any;
};

const ClassSelectionPage: React.FC<Props> = ({ selectedClass, setSelectedClass, selectedLanguage, setSelectedLanguage, setCurrentPage, appData }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-purple-600 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <button onClick={() => setCurrentPage('home')}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Select Class & Language</h1>
        <div className="w-6" />
      </div>
    </div>
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <label className="block mb-2 font-semibold text-gray-700">Select Your Class</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none mb-4"
        >
          <option value="">Choose Class</option>
          {appData.classes.map((cls: string) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
        <label className="block mb-2 font-semibold text-gray-700">Select Your Language</label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
        >
          <option value="">Choose Language</option>
          {appData.languages.map((lang: string) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
      <button
        onClick={() => {
          if (selectedClass && selectedLanguage) setCurrentPage('subject-selection');
        }}
        disabled={!selectedClass || !selectedLanguage}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Proceed
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
);

export default ClassSelectionPage;
