export type QuizOption = { key: string; text: string };
export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
  correctKey: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which of the following statements is incorrect regarding the addition of integers?',
    options: [
      { key: 'A', text: 'Integers are closed under addition.' },
      { key: 'B', text: 'Addition is commutative for integers.' },
      { key: 'C', text: '0 is the additive identity for integers.' },
      { key: 'D', text: '1 is the additive identity for integers.' }
    ],
    correctKey: 'D',
    explanation: '1 is the multiplicative identity; the additive identity is 0.'
  },
  {
    id: 2,
    question: 'Evaluate: (-5) × (-4) × (-3)',
    options: [
      { key: 'A', text: '60' },
      { key: 'B', text: '-60' },
      { key: 'C', text: '12' },
      { key: 'D', text: '-12' }
    ],
    correctKey: 'B',
    explanation: 'Three negatives give a negative product: 5×4×3 = 60 → -60.'
  },
  {
    id: 3,
    question: 'Radhika got 10 correct answers ( +5 each ) and total score 30 with -2 for each incorrect. How many incorrect?',
    options: [
      { key: 'A', text: '10' },
      { key: 'B', text: '5' },
      { key: 'C', text: '15' },
      { key: 'D', text: '8' }
    ],
    correctKey: 'A',
    explanation: '10 correct → 50 marks. She scored 30, lost 20 → 20/2 = 10 incorrect.'
  },
  {
    id: 4,
    question: 'Identify the property: 15 × [10 + (-2)] = (15 × 10) + (15 × (-2))',
    options: [
      { key: 'A', text: 'Commutative Property' },
      { key: 'B', text: 'Associative Property' },
      { key: 'C', text: 'Distributive Property' },
      { key: 'D', text: 'Closure Property' }
    ],
    correctKey: 'C',
    explanation: 'This is the distributive property a(b + c) = ab + ac.'
  },
  {
    id: 5,
    question: 'What is the value of [(-36) ÷ 12] ÷ 3?',
    options: [
      { key: 'A', text: '-1' },
      { key: 'B', text: '1' },
      { key: 'C', text: '-4' },
      { key: 'D', text: '3' }
    ],
    correctKey: 'A',
    explanation: '(-36) ÷ 12 = -3; then -3 ÷ 3 = -1.'
  },
  {
    id: 6,
    question: 'Which pair of integers has a sum of -3?',
    options: [
      { key: 'A', text: '(-1, -2)' },
      { key: 'B', text: '(-5, 2)' },
      { key: 'C', text: '(-4, 1)' },
      { key: 'D', text: '(1, 2)' }
    ],
    correctKey: 'A',
    explanation: '(-1) + (-2) = -3.'
  },
  {
    id: 7,
    question: 'What is the additive inverse of -8?',
    options: [
      { key: 'A', text: '8' },
      { key: 'B', text: '-8' },
      { key: 'C', text: '0' },
      { key: 'D', text: '1' }
    ],
    correctKey: 'A',
    explanation: 'Additive inverse of x is -x. Inverse of -8 is 8.'
  },
  {
    id: 8,
    question: 'Start +10°C at noon, decreases 2°C/hr. When will it be -8°C?',
    options: [
      { key: 'A', text: '9 PM' },
      { key: 'B', text: '8 PM' },
      { key: 'C', text: '10 PM' },
      { key: 'D', text: '6 PM' }
    ],
    correctKey: 'A',
    explanation: 'Change needed 18°C, at 2°C/hr → 9 hours after noon → 9 PM.'
  },
  {
    id: 9,
    question: 'Assertion: (-9)×(-5)×(-6)×(-3) is positive. Reason: Product of even number of negatives is positive.',
    options: [
      { key: 'A', text: 'Both A and R true and R explains A' },
      { key: 'B', text: 'Both A and R true but R not correct explanation' },
      { key: 'C', text: 'A true but R false' },
      { key: 'D', text: 'A false but R true' }
    ],
    correctKey: 'A',
    explanation: 'Four negatives (even) → product positive; reason correctly explains.'
  },
  {
    id: 10,
    question: 'Assertion: For any integer a, a ÷ 0 = 0. Reason: Division by zero is not defined.',
    options: [
      { key: 'A', text: 'Both A and R true and R explains A' },
      { key: 'B', text: 'Both A and R true but R not correct explanation' },
      { key: 'C', text: 'A true but R false' },
      { key: 'D', text: 'A false but R true' }
    ],
    correctKey: 'D',
    explanation: 'Assertion is false; division by zero is undefined (R true).'
  },
  {
    id: 11,
    question: 'Which expression equals -30?',
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
    question: "Determine the integer whose product with (-1) is 25.",
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
    question: 'What is (-1) × (-1)?',
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
    question: 'Solve: 25 - 5 × (4 + 6)',
    options: [
      { key: 'A', text: '200' },
      { key: 'B', text: '-25' },
      { key: 'C', text: '125' },
      { key: 'D', text: '25' }
    ],
    correctKey: 'B',
    explanation: 'Brackets →10; 5×10=50; 25-50=-25.'
  },
  {
    id: 15,
    question: 'Replace blank: (-3) × ____ = 27',
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
    question: 'Which property is a × (b × c) = (a × b) × c?',
    options: [
      { key: 'A', text: 'Associative Property of Multiplication' },
      { key: 'B', text: 'Commutative Property' },
      { key: 'C', text: 'Distributive Property' },
      { key: 'D', text: 'Closure Property' }
    ],
    correctKey: 'A',
    explanation: 'This is associativity of multiplication.'
  },
  {
    id: 17,
    question: 'Plane 5000 m above and submarine 1200 m below; vertical distance?',
    options: [
      { key: 'A', text: '3800 m' },
      { key: 'B', text: '6200 m' },
      { key: 'C', text: '-3800 m' },
      { key: 'D', text: '5000 m' }
    ],
    correctKey: 'B',
    explanation: 'Distance = 5000 - (-1200) = 6200 m.'
  },
  {
    id: 18,
    question: 'When a negative integer is divided by a positive integer the quotient is:',
    options: [
      { key: 'A', text: 'Always positive' },
      { key: 'B', text: 'Always negative' },
      { key: 'C', text: 'Either positive or negative' },
      { key: 'D', text: 'Zero' }
    ],
    correctKey: 'B',
    explanation: 'Different signs → negative quotient.'
  },
  {
    id: 19,
    question: 'Fill blank: ____ ÷ 48 = -1',
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
    question: 'Which does NOT represent an integer?',
    options: [
      { key: 'A', text: '0 ÷ (-7)' },
      { key: 'B', text: '20 ÷ (-4)' },
      { key: 'C', text: '(-9) ÷ 3' },
      { key: 'D', text: '(-7) ÷ 3' }
    ],
    correctKey: 'D',
    explanation: '(-7)/3 is not a whole number; others produce integers.'
  }
];

export default quizQuestions;
