export type QuizOption = { key: string; text: string };
export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
  correctKey: string;
  explanation: string;
};

export const quizQuestionsKui: QuizQuestion[] = [
  {
    id: 1,
    question: '(୧). ର ଡେଡି ତାନିଇ ଯୋଡ଼େକା(୨) ମୁହକା(ମାଙ୍କଡ଼) କକଚା ମାସ, ଅଟେଏ ୩ ଗୋଟେ ମୁହକା ଏ ଡେଡି ତାନିଇ କକ୍ତ। ଇଦେ ଏସି ଗୋଟା ଆତ?',
    options: [
      { key: 'A', text: '୪' },
      { key: 'B', text: '୭' },
      { key: 'C', text: '୫' },
      { key: 'D', text: '୯' }
    ],
    correctKey: 'C',
    explanation: 'Ans- C'
  },
  {
    id: 2,
    question: '(୨). ରାମ ବାହା ୯ ଗୋଟା କମଳା ମାସ, ତାଡ଼ା ଆଜା ୬ ଗୋଟା ସିତେ। ଇଦେ ରାମ ବାହା ଏସି ଗୋଟା କମଳା ଆତ?',
    options: [
      { key: 'A', text: '୧୦' },
      { key: 'B', text: '୧୨' },
      { key: 'C', text: '୧୪' },
      { key: 'D', text: '୧୫' }
    ],
    correctKey: 'D',
    explanation: 'Ans- D'
  },
  {
    id: 3,
    question: '(୩). ର ଜୁଡ଼ି ତାନିଇ ୪ ଗୋଟା ସେଓ ମାସ। ଅଟେ ୫ ଗୋଟା ଇଟା ଆତେ। ଇଦେ ଏସି ଗୋଟା ସେଓ ଆତ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୯' },
      { key: 'C', text: '୧୦' },
      { key: 'D', text: '୧୧' }
    ],
    correctKey: 'B',
    explanation: 'Ans- B'
  },
  {
    id: 4,
    question: '(୪). ରିତା ବାହା ୬ ଗୋଟା କଲମାକା ମାସ, ଏରେ ଅଟେ ଯୋଡ଼େ(୨) କା କଡିତେ। ଇଦେ ରିତା ବାହା ଏସି ଗୋଟା କଲମାକା ଆତ?',
    options: [
      { key: 'A', text: '୭' },
      { key: 'B', text: '୮' },
      { key: 'C', text: '୯' },
      { key: 'D', text: '୧୦' }
    ],
    correctKey: 'B',
    explanation: 'Ans- B'
  },
  {
    id: 5,
    question: '(୫). ର ବଗିଚା ତାନିଇ ୭ ଗୋଟା ପୁଙ୍ଗା ପୁଶା ମାସ, ଅଟେ ୩ ଗୋଟା ପୁଙ୍ଗା ପୁତ। ଏସି ଗୋଟା ପୁଙ୍ଗା ଆତ?',
    options: [
      { key: 'A', text: '୯' },
      { key: 'B', text: '୧୦' },
      { key: 'C', text: '୧୧' },
      { key: 'D', text: '୧୨' }
    ],
    correctKey: 'B',
    explanation: 'Ans-B'
  },
  {
    id: 6,
    question: '(୬). ର ଜୁଡ଼ି ତାନିଇ ୫ ଗୋଟା ମାହା ମାସ, ଅଟେ ୪ ଗୋଟା ଇଟା ଆତେ। ଏସି ଗୋଟା ମାହା ଆତ?',
    options: [
      { key: 'A', text: '୯' },
      { key: 'B', text: '୮' },
      { key: 'C', text: '୧୦' },
      { key: 'D', text: '୧୧' }
    ],
    correctKey: 'A',
    explanation: 'Ans-A'
  },
  {
    id: 7,
    question: '(୭). ସୁନିତା ବାହା ୩ ଗୋଟା ବହିଙ୍ଗା ମାସ, ଅଟେ ୬ ଗୋଟା ବହିଙ୍ଗା ମେଲି ଆତ। ଏସି ଗୋଟା ବହିଙ୍ଗା ଆତ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୧୦' },
      { key: 'C', text: '୯' },
      { key: 'D', text: '୧୧' }
    ],
    correctKey: 'C',
    explanation: 'Ans-C'
  },
  {
    id: 8,
    question: '(୮). ର ଡେଡି ତାନିଇ ୮ ଗୋଟା ପଟାଙ୍ଗା କକଚା ମାସ, ଅଟେ ଯୋଡ଼େ(୨) କା ବାତ। ଏସି ଗୋଟା ପାଟାଙ୍ଗା ଆତ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୯' },
      { key: 'C', text: '୧୦' },
      { key: 'D', text: '୧୧' }
    ],
    correctKey: 'C',
    explanation: 'Ans- C'
  },
  {
    id: 9,
    question: '(୯). ରମେଶ ବାହା ୭ ଗୋଟା ବଲ ମାସ, ଏ ଆଞ୍ଜୁ ଅଟେ ୩ ଗୋଟା ବଲ ପାଟେଞ୍ଜୁ। ଗୁଲେ ଏସି ଗୋଟା ବଲ ଆତ?',
    options: [
      { key: 'A', text: '୮' },
      { key: 'B', text: '୯' },
      { key: 'C', text: '୧୦' },
      { key: 'D', text: '୧୧' }
    ],
    correctKey: 'C',
    explanation: 'Ans- C'
  },
  {
    id: 10,
    question: '(୧୦). ର ପେଡ଼ି ତାନିଇ ୪ ଗୋଟା ଚକଲେଟ କା ମାସ, ଅଟେ ୪ ଗୋଟା ଇଟା ଅଟେ। ଗୁଲେ ଏସି ଗୋଟା ଆତ?',
    options: [
      { key: 'A', text: '୯' },
      { key: 'B', text: '୮' },
      { key: 'C', text: '୧୧' },
      { key: 'D', text: '୧୨' }
    ],
    correctKey: 'B',
    explanation: 'Ans- B'
  }
];

export default quizQuestionsKui;
