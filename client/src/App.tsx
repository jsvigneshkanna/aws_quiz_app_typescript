import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />}></Route>
          <Route path="/thankyou" element={<Thankyou overallScore={0} result={0} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
