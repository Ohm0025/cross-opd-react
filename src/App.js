import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/"></Route>
    </Routes>
  );
}

export default App;
