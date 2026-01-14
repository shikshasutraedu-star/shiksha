export type QuizOption = { key: string; text: string };
export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
  correctKey: string;
  explanation: string;
};

export const quizQuestionsOdia: QuizQuestion[] = [
  {
    id: 1,
    question: 'ପୂର୍ଣ୍ଣସଂଖ୍ୟାର ଯୋଗ ସମ୍ବନ୍ଧରେ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁ ଉକ୍ତିଟି ଭୁଲ୍ ଅଟେ?',
    options: [
      { key: 'A', text: 'ପୂର୍ଣ୍ଣସଂଖ୍ୟା ଗୁଡ଼ିକ ଯୋଗ ପାଇଁ ଆବଦ୍ଧ (Closed) ଅଟନ୍ତି।' },
      { key: 'B', text: 'ପୂର୍ଣ୍ଣସଂଖ୍ୟା ପାଇଁ ଯୋଗ ନିୟମ କ୍ରମବିନିମୟୀ (Commutative) ଅଟେ।' },
      { key: 'C', text: "ପୂର୍ଣ୍ଣସଂଖ୍ୟା ପାଇଁ '୦' ହେଉଛି ଯୋଗାତ୍ମକ ଅଭେଦ (Additive identity)।" },
      { key: 'D', text: "ପୂର୍ଣ୍ଣସଂଖ୍ୟା ପାଇଁ '୧' ହେଉଛି ଯୋଗାତ୍ମକ ଅଭେଦ।" }
    ],
    correctKey: 'D',
    explanation: "'୧' ଗୁଣନାତ୍ମକ ଅଭେଦ; ଯୋଗାତ୍ମକ ଅଭେଦ ୦ ଅଟେ。"
  },
  {
    id: 2,
    question: 'ମୂଲ୍ୟ ନିରୂପଣ କର: (-5) × (-4) × (-3)',
    options: [
      { key: 'A', text: '60' },
      { key: 'B', text: '-60' },
      { key: 'C', text: '12' },
      { key: 'D', text: '-12' }
    ],
    correctKey: 'B',
    explanation: 'ତିନୋଟି ଋଣାତ୍ମକ → ଅଯୁଗ୍ମ → ଫଳାଫଳ ଋଣାତ୍ମକ: -60.'
  },
  {
    id: 3,
    question: 'ରାଧିକା 10 ଠିକ୍ ଉତ୍ତର ଦେଇ ସମ୍ପୂର୍ଣ୍ଣ ସ୍କୋର 30 ଲାଭ କରିଛନ୍ତି; ପ୍ରତ୍ୟେକ ଠିକ୍ +5 ଏବଂ ପ୍ରତ୍ୟେକ ଭୁଲ୍ -2; କେତେ ଭୁଲ୍?',
    options: [
      { key: 'A', text: '10' },
      { key: 'B', text: '5' },
      { key: 'C', text: '15' },
      { key: 'D', text: '8' }
    ],
    correctKey: 'A',
    explanation: '10×5=50; 50→30 = 20 lost; 20/2 = 10 incorrect.'
  },
  {
    id: 4,
    question: 'ନିମ୍ନଲିଖିତ ସମୀକରଣରେ କେଉଁ ନିୟମ ବ୍ୟବହାର ହୋଇଛି: 15 × [10 + (-2)] = (15 × 10) + (15 × (-2))?',
    options: [
      { key: 'A', text: 'କ୍ରମବିନିମୟୀ (Commutative)' },
      { key: 'B', text: 'ସହଯୋଗୀ (Associative)' },
      { key: 'C', text: 'ବଣ୍ଟନ (Distributive)' },
      { key: 'D', text: 'ଆବଦ୍ଧ (Closure)' }
    ],
    correctKey: 'C',
    explanation: 'ଏହା ବଣ୍ଟନ ନିୟମ: a(b+c)=ab+ac.'
  },
  {
    id: 5,
    question: '[(-36) ÷ 12] ÷ 3 ର ମୂଲ୍ୟ କେତେ?',
    options: [
      { key: 'A', text: '-1' },
      { key: 'B', text: '1' },
      { key: 'C', text: '-4' },
      { key: 'D', text: '3' }
    ],
    correctKey: 'A',
    explanation: '(-36)÷12=-3; -3÷3=-1.'
  },
  {
    id: 6,
    question: 'କେଉଁ ଯୋଡ଼ିର ଯୋଗଫଳ -3?',
    options: [
      { key: 'A', text: '(-1, -2)' },
      { key: 'B', text: '(-5, 2)' },
      { key: 'C', text: '(-4, 1)' },
      { key: 'D', text: '(1, 2)' }
    ],
    correctKey: 'A',
    explanation: '(-1)+(-2)=-3.'
  },
  {
    id: 7,
    question: 'ଏ -8 ର ଯୋଗାତ୍ମକ ବିଲୋମୀ କେଉଁ?',
    options: [
      { key: 'A', text: '8' },
      { key: 'B', text: '-8' },
      { key: 'C', text: '0' },
      { key: 'D', text: '1' }
    ],
    correctKey: 'A',
    explanation: 'ଯୋଗାତ୍ମକ ବିଲୋମୀ ହେଉଛି -x; ଏହା 8 ଅଟେ.'
  },
  {
    id: 8,
    question: 'ସୂର୍ଯ୍ୟାଲୋକ +10°C ରୁ -8°C ପର୍ଯ୍ୟନ୍ତ ହେବାକୁ କେତେ ସମୟ?',
    options: [
      { key: 'A', text: 'ରାତି 9 ଟା' },
      { key: 'B', text: 'ରାତି 8 ଟା' },
      { key: 'C', text: 'ରାତି 10 ଟା' },
      { key: 'D', text: 'ସନ୍ଧ୍ୟା 6 ଟା' }
    ],
    correctKey: 'A',
    explanation: 'ଚାହିଁଥିବା ପରିବର୍ତ୍ତନ 18°C; 2°C/hr → 9 ଘଣ୍ଟା → 9 PM.'
  },
  {
    id: 9,
    question: 'କଥନ (A): (-9)×(-5)×(-6)×(-3) ଧନାତ୍ମକ? କାରଣ: ଯୁଗ୍ମ ସଂଖ୍ୟା ଋଣାତ୍ମକ ଗୁଣଫଳ ଧନାତ୍ମକ?',
    options: [
      { key: 'A', text: 'A ଏବଂ R ସତ୍ୟ ଏବଂ R ବ୍ୟାଖ୍ୟା' },
      { key: 'B', text: 'A ଏବଂ R ସତ୍ୟ କିନ୍ତୁ R ବ୍ୟାଖ୍ୟା ନୁହେଁ' },
      { key: 'C', text: 'A ସତ୍ୟ କିନ୍ତୁ R ମିଥ୍ୟା' },
      { key: 'D', text: 'A ମିଥ୍ୟା କିନ୍ତୁ R ସତ୍ୟ' }
    ],
    correctKey: 'A',
    explanation: '4 ଟି ଋଣାତ୍ମକ → even → ଧନାତ୍ମକ.'
  },
  {
    id: 10,
    question: 'A: a ÷ 0 = 0? R: Division by zero undefined?',
    options: [
      { key: 'A', text: 'A ଏବଂ R ସତ୍ୟ ଏବଂ R ବ୍ୟାଖ୍ୟା' },
      { key: 'B', text: 'A ଏବଂ R ସତ୍ୟ କିନ୍ତୁ R ବ୍ୟାଖ୍ୟା ନୁହେଁ' },
      { key: 'C', text: 'A ସତ୍ୟ କିନ୍ତୁ R ମିଥ୍ୟା' },
      { key: 'D', text: 'A ମିଥ୍ୟା କିନ୍ତୁ R ସତ୍ୟ' }
    ],
    correctKey: 'D',
    explanation: 'A ମିଥ୍ୟା; R ସତ୍ୟ।'
  },
  {
    id: 11,
    question: 'କେଉଁ ଅଭିବ୍ୟକ୍ତି -30 ସମାନ?',
    options: [
      { key: 'A', text: '(-10) - (-20)' },
      { key: 'B', text: '(-6) × (+5)' },
      { key: 'C', text: '(-10) + (+20)' },
      { key: 'D', text: '(-60) ÷ (-2)' }
    ],
    correctKey: 'B',
    explanation: '(-6)×5 = -30.'
  },
  {
    id: 12,
    question: 'କୌଣସି ସଂଖ୍ୟା (-1) ସହ ଗୁଣିଲେ ଫଳ 25? ',
    options: [
      { key: 'A', text: '-25' },
      { key: 'B', text: '25' },
      { key: 'C', text: '1' },
      { key: 'D', text: '-1' }
    ],
    correctKey: 'A',
    explanation: '(-25)×(-1)=25.'
  },
  {
    id: 13,
    question: '(-1) × (-1) ଫଳ କଣ?',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '-1' },
      { key: 'C', text: '1' },
      { key: 'D', text: '-2' }
    ],
    correctKey: 'C',
    explanation: '(-1)×(-1)=1.'
  },
  {
    id: 14,
    question: '25 - 5 × (4 + 6) ସମାଧାନ କରନ୍ତୁ',
    options: [
      { key: 'A', text: '200' },
      { key: 'B', text: '-25' },
      { key: 'C', text: '125' },
      { key: 'D', text: '25' }
    ],
    correctKey: 'B',
    explanation: 'Brackets 10; 5×10=50; 25-50=-25.'
  },
  {
    id: 15,
    question: '(-3) × ____ = 27 ପୂରଣ କରନ୍ତୁ',
    options: [
      { key: 'A', text: '9' },
      { key: 'B', text: '-9' },
      { key: 'C', text: '81' },
      { key: 'D', text: '-27' }
    ],
    correctKey: 'B',
    explanation: '27/(-3) = -9.'
  },
  {
    id: 16,
    question: 'a × (b × c) = (a × b) × c କେଉଁ ନିୟମ?',
    options: [
      { key: 'A', text: 'Associative of Multiplication' },
      { key: 'B', text: 'Commutative' },
      { key: 'C', text: 'Distributive' },
      { key: 'D', text: 'Closure' }
    ],
    correctKey: 'A',
    explanation: 'Associative property.'
  },
  {
    id: 17,
    question: '5000 m ଉପରେ ବିମାନ ଏବଂ 1200 m ତଳେ ଜଳସ୍ଥରରେ ଥିବା ବୁଡ଼ାଜାହାଜ; ଦୂରତା କେତେ?',
    options: [
      { key: 'A', text: '3800 m' },
      { key: 'B', text: '6200 m' },
      { key: 'C', text: '-3800 m' },
      { key: 'D', text: '5000 m' }
    ],
    correctKey: 'B',
    explanation: '5000 - (-1200) = 6200 m.'
  },
  {
    id: 18,
    question: 'ଋଣାତ୍ମକ ÷ ଧନାତ୍ମକ → କାହାକୁ ଫଳ?',
    options: [
      { key: 'A', text: 'Always positive' },
      { key: 'B', text: 'Always negative' },
      { key: 'C', text: 'Either' },
      { key: 'D', text: 'Zero' }
    ],
    correctKey: 'B',
    explanation: 'ଅଲଗା ଚିହ୍ନ → ଫଳ ଋଣାତ୍ମକ.'
  },
  {
    id: 19,
    question: '____ ÷ 48 = -1',
    options: [
      { key: 'A', text: '-48' },
      { key: 'B', text: '48' },
      { key: 'C', text: '1' },
      { key: 'D', text: '-1' }
    ],
    correctKey: 'A',
    explanation: '-48 ÷ 48 = -1.'
  },
  {
    id: 20,
    question: 'ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପୂର୍ଣ୍ଣସଂଖ୍ୟା ନୁହେଁ?',
    options: [
      { key: 'A', text: '0 ÷ (-7)' },
      { key: 'B', text: '20 ÷ (-4)' },
      { key: 'C', text: '(-9) ÷ 3' },
      { key: 'D', text: '(-7) ÷ 3' }
    ],
    correctKey: 'D',
    explanation: '(-7)/3 ଭାଗ ଭାଗ ନୁହେଁ।'
  }
];

export default quizQuestionsOdia;
