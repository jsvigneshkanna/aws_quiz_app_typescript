import React, { useState, useEffect } from "react";
import quizData from "../data/quizData";

type Props = {};
type Data = {
  question: String;
  optionA: String;
  optionB: String;
  optionC: String;
  optionD: String;
  correctOption: String;
};

const QuizContainer = (props: Props) => {
  const [quiz, setQuiz] = useState<Data>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    setQuiz(quizData[currentQuestion]);
  }, [currentQuestion]);

  const checkAnswer = (option: String) => {
    if (quiz?.correctOption === option) {
      setScore(score + 1);
    } else {
      console.log("wrong");
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="relative">
      <div className="absolute top-5 right-20 bg-slate-700 dark:bg-sky-300 text-slate-100 dark:text-slate-800 p-2 rounded-2xl text-xl font-extrabold">
        Score: {score}
      </div>
      <div className="flex justify-center items-center h-[75vh]">
        <div className="bg-slate-300 dark:bg-slate-700 border-2 border-indigo-500 p-5 rounded-2xl">
          <p className="text-2xl text-center font-bold text-blue-700 dark:text-blue-300 mb-5">{quiz?.question}</p>
          <p
            className="font-semibold text-lg cursor-pointer my-5 hover:underline underline-offset-2 decoration-orange-500 hover:text-blue-700 dark:hover:text-green-500"
            onClick={() => checkAnswer("optionA")}
          >
            {quiz?.optionA}
          </p>
          <p
            className="font-semibold text-lg cursor-pointer my-5 hover:underline underline-offset-2 decoration-orange-500 hover:text-blue-700 dark:hover:text-green-500"
            onClick={() => checkAnswer("optionB")}
          >
            {quiz?.optionB}
          </p>
          <p
            className="font-semibold text-lg cursor-pointer my-5 hover:underline underline-offset-2 decoration-orange-500 hover:text-blue-700 dark:hover:text-green-500"
            onClick={() => checkAnswer("optionC")}
          >
            {quiz?.optionC}
          </p>
          <p
            className="font-semibold text-lg cursor-pointer my-5 hover:underline underline-offset-2 decoration-orange-500 hover:text-blue-700 dark:hover:text-green-500"
            onClick={() => checkAnswer("optionD")}
          >
            {quiz?.optionD}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
