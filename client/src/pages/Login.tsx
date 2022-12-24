import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const LoginPage = (props: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("Boom Boo");
  const playGame = (e: any) => {
    e.preventDefault();
    return navigate("/quiz", { replace: true, state: { playerName: name } });
  };
  return (
    <div className="flex flex-col justify-center items-center pt-20 md:pt-32 px-4 md:px-0 ">
      <h1 className="text-xl md:text-2xl text-center text-indigo-500 font-black">
        Welcome to Vignesh Kanna's Quiz App 🤯
      </h1>
      <div className="py-6 bg-slate-300 dark:bg-slate-800 w-full md:w-1/2 flex flex-col justify-center items-center p-3 mt-8 md:mt-16 gap-5 rounded-2xl shadow-lg shadow-blue-700/50 dark:shadow-orange-500/50">
        <p className="text-lg font-semibold">Please Enter your name below</p>
        <input
          type="text"
          placeholder="Don't have name? then enter boom boo"
          className="w-full rounded-2xl text-lg p-1 text-black"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p
        className="mt-10 w-max rounded-xl p-2 bg-slate-800 text-white dark:bg-slate-300 dark:text-black text-center hover:scale-105 cursor-pointer font-semibold"
        onClick={(e) => playGame(e)}
      >
        Let's Play
      </p>
    </div>
  );
};

export default LoginPage;
