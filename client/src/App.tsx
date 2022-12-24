import Header from "./components/Header";
import QuizContainer from "./components/QuizContainer";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-white">
      <Header />
      <QuizContainer />
    </div>
  );
}

export default App;
