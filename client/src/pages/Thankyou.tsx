import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  overallScore: number;
  result: number;
};

const Thankyou = (props: Props) => {
  let location = useLocation();
  const overallScore = location.state.overallScore;
  const quizResult = location.state.result;
  const percentage = (quizResult / overallScore) * 100;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto pt-44  relative px-4 md:px-0">
        <div className="border-[3px] border-indigo-500 md:w-1/2 w-full text-center p-3 bg-slate-300 dark:bg-purple-800 rounded-2xl shadow-lg shadow-slate-600 dark:shadow-blue-900">
          <h2 className="text-2xl font-black">Thank you 💃</h2>
          <p className="text-lg font-semibold pt-10">Your Score is: {quizResult}</p>
          <p className="text-lg font-medium pt-4">Score Percentage: {percentage}%</p>
          <p className=" bg-slate-500/30 dark:bg-purple-900/60 font-medium w-full p-2 mt-4 rounded-3xl">
            {percentage <= 50
              ? "Hope you need to improve your General knowledge 🤒"
              : "Aah Aaaah, Great you are well versed in General knowledge 🎈🎊"}
          </p>
        </div>

        <a
          href="/"
          className="bg-slate-300 dark:bg-slate-700 mt-16 p-2 rounded-2xl font-semibold text-xl hover:scale-105"
        >
          Try again
        </a>
      </div>
    </div>
  );
};

export default Thankyou;
