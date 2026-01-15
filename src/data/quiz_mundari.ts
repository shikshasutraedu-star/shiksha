export type QuizOption = { key: string; text: string };
export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
  correctKey: string;
  explanation: string;
};

export const quizQuestionsMundari: QuizQuestion[] = [
  {
    id: 1,
    question: '(୧). ମିଆ ଦାରୁରେ ବାରିଆ(୨) ହନୁ ଦୁବ୍ କାନ୍ଥାନା କୋ, ଆଡ ଆପିଆ(୩) ହନୁ ହିକ୍ କେତେ ଆକୋଆ ଲୋ ଦୁବ୍ ନେନାକୋ । ନାହା ଦାରୁରେ ଚିମିଠୋ ହନୁ ହୁଏନାକୋ ?',
    options: [
      { key: 'A', text: '୪' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୫' },
      { key: 'D', text: '୯' }
    ],
    correctKey: 'C',
    explanation: 'Ans - C'
  },
  {
    id: 2,
    question: '(୨). ରାମ୍ ତା ୯ ଠୋ ଯଜମା ତାହିଙ୍ଗ୍ କେନା । ଆୟା ଉମା ହିନିକେ ୬ ଠୋ ଯଜମା ଏମ୍ ଲେ । ନାହା ରାମ୍ ତା ଛୀମୀଆଙ୍ଗ୍ ଯଜମା ମେନ ?',
    options: [
      { key: 'A', text: '୧୪' },
      { key: 'B', text: '୧୭' },
      { key: 'C', text: '୧୫' },
      { key: 'D', text: '୧୯' }
    ],
    correctKey: 'C',
    explanation: 'Ans - C'
  },
  {
    id: 3,
    question: '(୩). ମିଆ ଭାଉଗୀ ରେ ୪ ଠୋ ଯଜମା ତାହିଙ୍ଗ୍ କେନା । ଆଡ ୫ ଠୋ ଯଜମା ଏମ୍ କେନା । ନାହା ନେତା ଛୀମୀ ଠୋ ଯଜମା ହୁଏନା ?',
    options: [
      { key: 'A', text: '୪' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୫' },
      { key: 'D', text: '୯' }
    ],
    correctKey: 'D',
    explanation: 'Ans - D'
  },
  {
    id: 4,
    question: '(୪). ରିତା ନ।ଳେକ୍ ରେ ୬ ଠୋ ଡଟ୍ ତାହିଙ୍ଗ୍ କେନା । ହିନି ଆଡ ୨ ଠୁ ଡଟ୍ କିରିଙ୍ଗ୍ ଲେ । ହଣା ଆୟାତା ଛୀମୀ ଠୁ ଡଟ୍ ମେନା ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୫' },
      { key: 'D', text: '୯' }
    ],
    correctKey: 'A',
    explanation: 'Ans - A'
  },
  {
    id: 5,
    question: '(୫). ମିଆ ଭାଉଗୀ ରେ ୫ ଠୋ ଉଲି ତାହିଙ୍ଗ୍ କେନା । ଆଡ ୪ ଠୋ ଉଲି ମାଣ୍ଡାଅ କେନା । ନାହା ନେତା ଛୀମୀ ଠୋ ଉଲି ହୁଏନା ?',
    options: [
      { key: 'A', text: '୪' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୫' },
      { key: 'D', text: '୯' }
    ],
    correctKey: 'D',
    explanation: 'Ans - D'
  },
  {
    id: 6,
    question: '(୬). ମିଆ ଦାରୁ ରେ ୮ ଠୋ ଅଳେ  ଦୁବ୍ କାନ୍ଥ୍ ନା କୋ । ଆଡ ବାରିଆ(୨) ଅଳେ ହିକ୍ ନେନା କୋ । ନାହା ଚିମି ଠୋ ଅଳେ ମେନା କୋ ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୧୦' },
      { key: 'C', text: '୧୨' },
      { key: 'D', text: '୯' }
    ],
    correctKey: 'B',
    explanation: 'Ans - B'
  },
  {
    id: 7,
    question: '(୭). ରମେଶ ତା ୭ ଠୋ ବଲ୍ ତାହିଙ୍ଗ୍ କେନା । ହିନି କେ ଆଡ ୩ ଠୋ ବଲ୍ ନାମେନା । ନାହା ହିଞ୍ଜା ତା ଚିମି ଠୋ ବଲ୍ ମେନା ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୯' },
      { key: 'D', text: '୧୦' }
    ],
    correctKey: 'D',
    explanation: 'Ans - D'
  },
  {
    id: 8,
    question: '(୮). ମିନା ତା ୫ ଠୋ ଏନେକ୍ ତେୟା ତାହିଙ୍ଗ୍ କେନା । ଆଡ ୫ ଠୋ ନାମେନା । ନାହା ଆୟାତା ଚିମି ଠୋ ଏନେକ୍ ତେୟା ମେନା ?',
    options: [
      { key: 'A', text: '୧୦' },
      { key: 'B', text: '୧୧' },
      { key: 'C', text: '୧୨' },
      { key: 'D', text: '୧୩' }
    ],
    correctKey: 'A',
    explanation: 'Ans - A'
  },
  {
    id: 9,
    question: '(୯). ମିଆ ଅଳାରେ ୬ ଠୋ ଦୁବ୍ ତେୟା ତାହିଙ୍ଗ୍ କେନା । ଆଡ ବାରିଆ(୨) ଆଉଲା କୋ । ନାହା ଚିମି ଠୋ ହୁଏନା ?',
    options: [
      { key: 'A', text: '୪' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୫' },
      { key: 'D', text: '୮' }
    ],
    correctKey: 'D',
    explanation: 'Ans - D'
  },
  {
    id: 10,
    question: '(୧୦). ରୀନା ତା ୭ ଠୋ ଅଲ୍ ତେୟା ତାହିଙ୍ଗ୍ କେନା । ଆଡ ୪ ଠୋ ନାମ୍ ନେନା । ନାହା ଚିମି ଠୋ ହୁଏନା ?',
    options: [
      { key: 'A', text: '୧୦' },
      { key: 'B', text: '୧୧' },
      { key: 'C', text: '୧୨' },
      { key: 'D', text: '୧୩' }
    ],
    correctKey: 'B',
    explanation: 'Ans - B'
  }
];

export default quizQuestionsMundari;
