import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Quiz from "./pages/Quiz";
import Thankyou from "./pages/Thankyou";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/quiz" element={<Quiz playerName="Boom Boo" />}></Route>
          <Route path="/thankyou" element={<Thankyou overallScore={0} result={0} playerName="Boom Boo" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
