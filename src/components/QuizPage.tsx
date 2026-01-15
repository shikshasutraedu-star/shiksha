import React, { useState, useContext } from 'react';
import quizQuestions from '../data/quiz';
import quizQuestionsOdia from '../data/quiz_odia';
import quizQuestionsKui from '../data/quiz_kui';
import quizQuestionsMundari from '../data/quiz_mundari';
import type { QuizQuestion } from '../data/quiz';
import { AppContext } from '../context/AppContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const QuizPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { uiLanguage, selectedClass, selectedLanguage, selectedSubject, selectedTopic } = useContext(AppContext);

  const questions =
    selectedClass === 'FLN' && selectedLanguage === 'Kui' && selectedSubject === 'Math' && selectedTopic === 'Chapter 1 - ଯୋଗ'
      ? quizQuestionsKui
      : selectedClass === 'FLN' && selectedLanguage === 'Mundari' && selectedSubject === 'Math' && selectedTopic === 'Chapter 1 - ଯୋଗ'
      ? quizQuestionsMundari
      : uiLanguage === 'od'
      ? quizQuestionsOdia
      : quizQuestions;
  const q: QuizQuestion = questions[index];

  function choose(optKey: string) {
    if (submitted) return;
    setAnswers((s) => ({ ...s, [q.id]: optKey }));
  }

  function finish() {
    setSubmitted(true);
  }

  async function downloadPdf() {
    const el = document.getElementById('quiz-result');
    if (!el) return;
    try {
      const canvas = await html2canvas(el, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = (pdf as any).getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('quiz-result.pdf');
    } catch (err) {
      // fallback: open print dialog
      console.error(err);
      window.print();
    }
  }

  const correctCount = Object.entries(answers).reduce((acc, [idStr, key]) => {
    const id = Number(idStr);
    const qq = questions.find((x) => x.id === id);
    return acc + (qq && qq.correctKey === key ? 1 : 0);
  }, 0);

  const wrongList = Object.entries(answers)
    .map(([idStr, key]) => ({ id: Number(idStr), given: key, q: questions.find((x) => x.id === Number(idStr)) }))
    .filter((x) => x.q && x.q.correctKey !== x.given) as { id: number; given: string; q: QuizQuestion }[];

  const unattemptedList = questions.filter((qq) => !Object.prototype.hasOwnProperty.call(answers, String(qq.id)));

  if (!submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Interactive Quiz</h2>
          <div className="mb-4 text-gray-700">Question {index + 1} of {questions.length}</div>
          <div className="mb-6">
            <div className="text-lg font-semibold mb-3">{q.question}</div>
            <div className="grid grid-cols-1 gap-3">
              {q.options.map((opt) => {
                  const chosen = answers[q.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => choose(opt.key)}
                      className={`text-left p-3 rounded-lg border-2 transition flex justify-between items-center ${chosen ? 'bg-purple-50 border-purple-300' : 'bg-white border-gray-200'} hover:scale-[1.01]`}
                    >
                      <div>
                        <div className="font-semibold">{opt.key}. {opt.text}</div>
                      </div>
                      <div className="ml-4 min-w-[68px] text-right text-sm">
                            {submitted && (opt.key === q.correctKey ? <span className="text-green-600 font-bold">{uiLanguage === 'od' ? 'ସଠିକ୍' : 'Correct'}</span> : (answers[q.id] === opt.key ? <span className="text-red-600 font-bold">{uiLanguage === 'od' ? 'ଭୁଲ୍' : 'Incorrect'}</span> : null))}
                          </div>
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-x-2">
              <button disabled={index === 0} onClick={() => setIndex(Math.max(0, index - 1))} className="px-4 py-2 bg-gray-200 rounded">Previous</button>
              <button disabled={index === questions.length - 1} onClick={() => setIndex(Math.min(questions.length - 1, index + 1))} className="px-4 py-2 bg-gray-200 rounded">Next</button>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={finish} className="px-4 py-2 bg-purple-600 text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const total = questions.length;
  const percent = Math.round((correctCount / total) * 100);
  const wrongCount = wrongList.length;
  const unattemptedCount = unattemptedList.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div id="quiz-result" className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-2 text-purple-600">{uiLanguage === 'od' ? 'ପରିଣାମ' : 'Results'}</h2>
        <div className="mb-4 text-gray-700">{uiLanguage === 'od' ? `ଆପଣ ${correctCount} ସଠିକ୍ ଉତ୍ତର, ${wrongCount} ଭୁଲ୍, ${unattemptedCount} ଅନୁତ୍ତୀର୍ଣ୍ଣ ପ୍ରଶ୍ନ — ପରୀକ୍ଷା ଚୂଡ଼ାନ୍ତ ଫଳାଫଳ: ${percent}%` : `You answered ${correctCount} correct, ${wrongCount} wrong, ${unattemptedCount} unattempted — Score: ${percent}%`}</div>

        <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">{uiLanguage === 'od' ? 'ପରିକ୍ଷା ସାଙ୍ଖ୍ୟିକ' : 'Test Summary'}</h3>
            <div className="text-sm text-gray-600">{total} {uiLanguage === 'od' ? 'ମୋଟ ପ୍ରଶ୍ନ' : 'total questions'}</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-32 text-sm text-gray-700">{uiLanguage === 'od' ? 'ସଠିକ୍' : 'Correct'}</div>
              <div className="flex-1 bg-gray-200 h-4 rounded overflow-hidden">
                <div className="bg-green-500 h-4" style={{ width: `${(correctCount/total)*100}%` }} />
              </div>
              <div className="w-12 text-right text-sm font-semibold">{correctCount}</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-32 text-sm text-gray-700">{uiLanguage === 'od' ? 'ଭୁଲ୍' : 'Wrong'}</div>
              <div className="flex-1 bg-gray-200 h-4 rounded overflow-hidden">
                <div className="bg-red-500 h-4" style={{ width: `${(wrongCount/total)*100}%` }} />
              </div>
              <div className="w-12 text-right text-sm font-semibold">{wrongCount}</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-32 text-sm text-gray-700">{uiLanguage === 'od' ? 'ଅନୁତ୍ତୀର୍ଣ୍ଣ ପ୍ରଶ୍ନ' : 'Unattempted'}</div>
              <div className="flex-1 bg-gray-200 h-4 rounded overflow-hidden">
                <div className="bg-yellow-400 h-4" style={{ width: `${(unattemptedCount/total)*100}%` }} />
              </div>
              <div className="w-12 text-right text-sm font-semibold">{unattemptedCount}</div>
            </div>
          </div>
        </div>

        {wrongList.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{uiLanguage === 'od' ? 'ଆଲୋଚନା: ଭୁଲ୍ ଉତ୍ତରଗୁଡ଼ିକ' : 'Review: incorrect answers'}</h3>
            {wrongList.map((w) => (
              <div key={w.id} className="p-4 border rounded-lg">
                <div className="font-semibold mb-2">Q{w.q.id}: {w.q.question}</div>
                <div className="mb-2">{uiLanguage === 'od' ? 'ଆପଣଙ୍କର ଉତ୍ତର:' : 'Your answer:'} <span className="font-semibold">{w.given}</span></div>
                <div className="mb-2">{uiLanguage === 'od' ? 'ସଠିକ୍ ବିକଳ୍ପ:' : 'Correct option:'} <span className="font-semibold text-green-700">{w.q.correctKey}</span></div>
                <div className="text-gray-700">{uiLanguage === 'od' ? 'ବ୍ୟାଖ୍ୟା:' : 'Explanation:'} {w.q.explanation}</div>
              </div>
            ))}
          </div>
        )}

        {unattemptedList.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold text-lg">{uiLanguage === 'od' ? 'ନ ଦିଆଯାଇଥିବା ପ୍ରଶ୍ନଗୁଡ଼ିକ' : 'Unattempted questions'}</h3>
            {unattemptedList.map((u) => (
              <div key={u.id} className="p-4 border rounded-lg">
                <div className="font-semibold mb-2">Q{u.id}: {u.question}</div>
                <div className="mb-2">{uiLanguage === 'od' ? 'ସଠିକ୍ ବିକଳ୍ପ:' : 'Correct option:'} <span className="font-semibold text-green-700">{u.correctKey}</span></div>
                <div className="text-gray-700">{uiLanguage === 'od' ? 'ବ୍ୟାଖ୍ୟା:' : 'Explanation:'} {u.explanation}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-3">
          <button onClick={() => { setAnswers({}); setSubmitted(false); setIndex(0); }} className="px-4 py-2 bg-gray-200 rounded">Retry</button>
          <button onClick={downloadPdf} className="px-4 py-2 bg-green-600 text-white rounded">Download PDF</button>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-purple-600 text-white rounded">Reload App</button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
