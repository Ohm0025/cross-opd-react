import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ExamPage from "./pages/examPage/ExamPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/"></Route>
      <Route element={<RegisterPage />} path="/register"></Route>
      <Route element={<ExamPage />} path="/exam"></Route>
    </Routes>
  );
}

export default App;
