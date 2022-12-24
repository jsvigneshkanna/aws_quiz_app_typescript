import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-full px-4 md:px-0 text-center bg-slate-300 dark:bg-slate-700 text-black dark:text-white py-2 shadow-inner shadow-indigo-400 dark:shadow-indigo-800 rounded-t-2xl">
      <p className="text-sm md:text-lg py-1">Developed by J S Vignesh Kanna | Question created by Rishi Kesh</p>
      <div className="flex gap-12 md:gap-16 justify-center items-center py-2 text-lg">
        <a href="https://github.com/jsvigneshkanna" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/jsvigneshkanna/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.buymeacoffee.com/jsvigneshkanna" target="_blank" rel="noreferrer">
          <SiBuymeacoffee />
        </a>
      </div>
    </div>
  );
};

export default Footer;
