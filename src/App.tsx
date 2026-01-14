import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';
import NavigationMenu from './components/NavigationMenu';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import LanguageSelectPage from './components/LanguageSelectPage';
import QuizPage from './components/QuizPage';
import ClassSelectionPage from './components/ClassSelectionPage';
import SubjectSelectionPage from './components/SubjectSelectionPage';
import TopicSelectionPage from './components/TopicSelectionPage';
import LessonsPage from './components/LessonsPage'; 

const AppContent: React.FC = () => {
  const { currentPage } = useContext(AppContext);

  return (
    <div className="font-sans">
      <NavigationMenu />

      {currentPage === 'welcome' && <WelcomePage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'signup' && <SignupPage />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'class-selection' && <ClassSelectionPage />}
      {currentPage === 'subject-selection' && <SubjectSelectionPage />}
      {currentPage === 'topic-selection' && <TopicSelectionPage />}
      {currentPage === 'lessons' && <LessonsPage />}
      {currentPage === 'quiz' && <QuizPage />}
      {currentPage === 'quiz-lang' && <LanguageSelectPage />}
    </div>
  );
};

const ShikshaSutra: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default ShikshaSutra;