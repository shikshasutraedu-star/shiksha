import React, { useContext } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AppContext } from '../context/AppContext';

const SubjectSelectionPage: React.FC = () => {
  const { selectedClass, setSelectedSubject, setCurrentPage, appData } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentPage('class-selection')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">{selectedClass}</h1>
          <div className="w-6" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Select Subject</h2>
        <div className="grid grid-cols-1 gap-4">
          {appData.subjects.map((subject: string) => (
            <button
              key={subject}
              onClick={() => {
                setSelectedSubject(subject);
                setCurrentPage('topic-selection');
              }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between"
            >
              <span className="font-semibold text-lg">{subject}</span>
              <ChevronRight className="w-5 h-5 text-purple-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectSelectionPage;
