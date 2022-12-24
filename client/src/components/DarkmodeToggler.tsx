import { useState, useEffect } from "react";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";

type Props = {};

const DarkmodeToggler = (props: Props) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };
  return (
    <div
      onClick={toggleTheme}
      className="bg-slate-900 dark:bg-blue-100 text-xl w-min p-1 rounded-full hover:scale-110 transition-all"
    >
      {theme == "dark" ? <RiSunFill color="black" /> : <RiMoonClearFill color="white" />}
    </div>
  );
};

export default DarkmodeToggler;
