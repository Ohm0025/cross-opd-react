import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import DrHome from "./pages/drHomePage/DrHomePage";
import ExamPage from "./pages/examPage/ExamPage";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/"></Route>
      <Route element={<RegisterPage />} path="/register"></Route>

      <Route element={<DrHome />} path="/">
        <Route element={<ExamPage />} path="drexam"></Route>
        <Route element={<SearchPage />} path="drsearch"></Route>
      </Route>
    </Routes>
  );
}

export default App;
