import React, { useContext } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const TopicSelectionPage: React.FC = () => {
  const { selectedSubject, setSelectedTopic, setCurrentPage, appData } = useContext(AppContext);

  const topicsForSubject: string[] = (appData.topics as Record<string, string[]>)[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentPage('subject-selection')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">{selectedSubject}</h1>
          <div className="w-6" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Select Topic</h2>
        <div className="grid grid-cols-1 gap-4">
          {topicsForSubject.map((topic: string) => (
            <button
              key={topic}
              onClick={() => {
                setSelectedTopic(topic);
                setCurrentPage('lessons');
              }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between"
            >
              <span className="font-semibold text-lg">{topic}</span>
              <ChevronRight className="w-5 h-5 text-purple-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicSelectionPage;
