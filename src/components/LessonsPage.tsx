import React from 'react';
import { ArrowLeft, Play, FileText, Award } from 'lucide-react';

type Props = {
  selectedTopic: string;
  setCurrentPage: (p: string) => void;
  appData: any;
};

const LessonsPage: React.FC<Props> = ({ selectedTopic, setCurrentPage, appData }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-purple-600 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <button onClick={() => setCurrentPage('topic-selection')}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">{selectedTopic}</h1>
        <div className="w-6" />
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lessons</h2>
      <div className="space-y-4">
        {(appData.lessons[selectedTopic] || appData.lessons['Integers']).map((lesson: any) => (
          <div key={lesson.id} className="bg-white rounded-xl shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Play className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lesson {lesson.id}</h3>
                  <p className="text-gray-600">{lesson.title}</p>
                  <p className="text-sm text-gray-500">{lesson.duration}</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-100 transition flex items-center justify-center mt-2">
              <FileText className="w-4 h-4 mr-2" />
              Assessment: {lesson.title}
            </button>
          </div>
        ))}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6 mt-6">
          <div className="flex items-center space-x-3 mb-2">
            <Award className="w-8 h-8" />
            <h3 className="font-bold text-xl">Chapter End Test</h3>
          </div>
          <p className="mb-4">Complete assessment for {selectedTopic}</p>
          <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:shadow-lg transition">Start Test</button>
        </div>
      </div>
    </div>
  </div>
);

export default LessonsPage;
