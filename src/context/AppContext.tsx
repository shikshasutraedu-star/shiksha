import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

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

type UserProfile = { name?: string; mobile?: string; class?: string; language?: string; dob?: string; district?: string; state?: string };

type AppContextType = {
  currentPage: string;
  setCurrentPage: (p: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
  isGuest: boolean;
  setIsGuest: (v: boolean) => void;
  selectedClass: string;
  setSelectedClass: (s: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (s: string) => void;
  selectedSubject: string;
  setSelectedSubject: (s: string) => void;
  selectedTopic: string;
  setSelectedTopic: (s: string) => void;
  userProfile: UserProfile;
  setUserProfile: (p: UserProfile) => void;
  uiLanguage: string;
  setUiLanguage: (l: string) => void;
  appData: typeof appData;
};

export const AppContext = createContext<AppContextType>({
  currentPage: 'welcome',
  setCurrentPage: () => {},
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isGuest: false,
  setIsGuest: () => {},
  selectedClass: '',
  setSelectedClass: () => {},
  selectedLanguage: '',
  setSelectedLanguage: () => {},
  selectedSubject: '',
  setSelectedSubject: () => {},
  selectedTopic: '',
  setSelectedTopic: () => {},
  userProfile: { name: '' },
  setUserProfile: () => {},
  uiLanguage: 'en',
  setUiLanguage: () => {},
  appData
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [userProfile, setUserProfile] = useState<UserProfile>({ name: '', mobile: '', class: '', language: '', dob: '', district: '', state: '' });
  const [uiLanguage, setUiLanguage] = useState('en');

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isMenuOpen,
        setIsMenuOpen,
        isLoggedIn,
        setIsLoggedIn,
        isGuest,
        setIsGuest,
        selectedClass,
        setSelectedClass,
        selectedLanguage,
        setSelectedLanguage,
        selectedSubject,
        setSelectedSubject,
        selectedTopic,
        setSelectedTopic,
        userProfile,
        setUserProfile,
        uiLanguage,
        setUiLanguage,
        appData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
