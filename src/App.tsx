import React, { useState } from 'react';
import NavigationMenu from './components/NavigationMenu';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import ClassSelectionPage from './components/ClassSelectionPage';
import SubjectSelectionPage from './components/SubjectSelectionPage';
import TopicSelectionPage from './components/TopicSelectionPage';
import LessonsPage from './components/LessonsPage';

// Dummy Data
export const appData = {
  classes: ['FLN', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
  languages: ['Kui', 'Santali', 'Mundari', 'Koshali', 'Desia', 'Sadri'],
  subjects: ['Math', 'Science', 'Social Science', 'English', 'Odia', 'Sanskrit', 'Computer Awareness', 'Career Awareness', 'Digital Skills'],
  topics: {
    Math: ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equation', 'Lines and Angles', 'Triangles & Its Properties', 'Comparing Quantities', 'Rational Numbers', 'Algebraic Expressions & Identities', 'Analytical Solid Geometry'],
    Science: ['Physics Basics', 'Chemistry Introduction', 'Biology Fundamentals', 'Environmental Science'],
    'Social Science': ['History', 'Geography', 'Civics', 'Economics'],
    English: ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Writing Skills'],
    Odia: ['Basic Grammar', 'Literature', 'Composition'],
    Sanskrit: ['Sanskrit Grammar', 'Shlokas', 'Literature'],
    'Computer Awareness': ['Computer Basics', 'MS Office', 'Internet Basics'],
    'Career Awareness': ['Career Planning', 'Skills Development', 'Job Market'],
    'Digital Skills': ['Digital Literacy', 'Online Safety', 'Productivity Tools']
  },
  lessons: {
    Integers: [
      { id: 1, title: 'Introduction', type: 'video', duration: '10 min' },
      { id: 2, title: 'Addition & Subtraction', type: 'video', duration: '15 min' },
      { id: 3, title: 'Multiplication & Division', type: 'video', duration: '12 min' },
      { id: 4, title: 'Properties of Integers', type: 'video', duration: '14 min' }
    ]
  }
};

const ShikshaSutra: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [userProfile, setUserProfile] = useState({ name: '', mobile: '', class: '', language: '', dob: '', district: '', state: '' });

  return (
    <div className="font-sans">
      <NavigationMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isLoggedIn={isLoggedIn}
        isGuest={isGuest}
        setIsLoggedIn={setIsLoggedIn}
        setIsGuest={setIsGuest}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === 'welcome' && <WelcomePage setCurrentPage={setCurrentPage} setIsGuest={setIsGuest} />}
      {currentPage === 'login' && <LoginPage setIsLoggedIn={setIsLoggedIn} setUserProfile={setUserProfile} setCurrentPage={setCurrentPage} />}
      {currentPage === 'signup' && <SignupPage setIsLoggedIn={setIsLoggedIn} setUserProfile={setUserProfile} setCurrentPage={setCurrentPage} appData={appData} />}
      {currentPage === 'home' && <HomePage setIsMenuOpen={setIsMenuOpen} setCurrentPage={setCurrentPage} isGuest={isGuest} userProfile={userProfile} />}
      {currentPage === 'class-selection' && (
        <ClassSelectionPage
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setCurrentPage={setCurrentPage}
          appData={appData}
        />
      )}
      {currentPage === 'subject-selection' && (
        <SubjectSelectionPage selectedClass={selectedClass} setSelectedSubject={setSelectedSubject} setCurrentPage={setCurrentPage} appData={appData} />
      )}
      {currentPage === 'topic-selection' && (
        <TopicSelectionPage selectedSubject={selectedSubject} setSelectedTopic={setSelectedTopic} setCurrentPage={setCurrentPage} appData={appData} />
      )}
      {currentPage === 'lessons' && <LessonsPage selectedTopic={selectedTopic} setCurrentPage={setCurrentPage} appData={appData} />}
    </div>
  );
};

export default ShikshaSutra;