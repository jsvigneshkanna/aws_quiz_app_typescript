import React, { useState, useEffect } from "react";
import quizData from "../data/quizData";
import Thankyou from "../pages/Thankyou";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "@reach/router";

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
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Data>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    if (currentQuestion === quizData.length - 1) {
      return navigate("/thankyou", { replace: true, state: { overallScore: quizData.length, result: score } });
    }
    setQuiz(quizData[currentQuestion]);
  }, [currentQuestion]);

  const checkAnswer = (option: String) => {
    let correctAnwerResultEl = document.getElementById("correctAnwerResult");
    let wrongAnwerResultEl = document.getElementById("wrongAnwerResult");
    if (quiz?.correctOption === option) {
      setScore(score + 1);
      correctAnwerResultEl?.classList.remove("hidden");
      setTimeout(() => {
        correctAnwerResultEl?.classList.add("hidden");
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      wrongAnwerResultEl?.classList.remove("hidden");
      setTimeout(() => {
        wrongAnwerResultEl?.classList.add("hidden");
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    }
  };

  return (
    <div className="relative pt-40 md:pt-0 px-4 md:px-0">
      <div className="absolute top-5 right-5 md:right-20 bg-slate-700 dark:bg-sky-300 text-slate-100 dark:text-slate-800 p-2 rounded-2xl text-lg md:text-xl font-extrabold">
        Score: {score}
      </div>
      <div className="flex justify-center items-center md:h-[75vh] flex-col w-full md:w-3/5 mx-auto">
        <div
          id="correctAnwerResult"
          className="bg-green-600 w-full md:w-1/2 mx-auto p-2 rounded-xl shadow-lg dark:shadow-green-600/75 shadow-green-800 mb-10 font-semibold hidden border-[2px] border-green-500"
        >
          🎉Correct
        </div>
        <div
          id="wrongAnwerResult"
          className="bg-red-600 w-full md:w-1/2 mx-auto p-2 rounded-xl shadow-lg dark:shadow-red-600/7dark:shadow-green-600/75 shadow-red-800 mb-10 font-semibold hidden border-[2px] border-red-500"
        >
          😤Wrong
        </div>
        <div className="bg-slate-300 dark:bg-slate-700 border-2 border-indigo-500 p-5 rounded-2xl w-full md:w-3/5 mx-auto">
          <p className="text-xl md:text-2xl text-center font-bold text-blue-700 dark:text-blue-300 mb-5">
            {quiz?.question}
          </p>
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
