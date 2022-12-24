import React from "react";
import DarkmodeToggler from "./DarkmodeToggler";

type Props = {};

const Header = (props: Props) => {
  return (
    <div
      className="relative bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white w-full flex px-52 
    py-3 items-center justify-between"
    >
      {/* left content */}
      <div className="font-black text-2xl tracking-widest">AWS Quiz App - TS</div>
      <div className=" cursor-pointer">
        <DarkmodeToggler />
      </div>
    </div>
  );
};

export default Header;
