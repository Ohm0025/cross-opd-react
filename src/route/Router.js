import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import DrHomePage from "../pages/homePage/drHomePage/DrHomePage";
// import ExamPage from "../pages/examPage/ExamPage";
// import SearchPage from "../pages/searchPage/SearchPage";
import { DOCTOR, PATIENT } from "../config/constant";

import AuthLayout from "../layouts/auth/AuthLayout";
import NotFound from "../pages/testPage/NotFound";
import HomeLayout from "../layouts/homePage/HomeLayout";

import PtHomePage from "../pages/homePage/ptHomePage/PtHomePage";
import DrugHxPage from "../pages/drugHxPage/DrugHxPage";
import ExamPage from "../pages/examPage/ExamPage";

function Router() {
  const { user, typeaccount } = useAuth();

  return (
    <Routes>
      {user ? (
        <Route
          path="/"
          element={<HomeLayout user={user} typeaccount={typeaccount} />}
        >
          {typeaccount === PATIENT ? (
            <>
              <Route path="/" element={<PtHomePage />}></Route>
              <Route path="drug" element={<DrugHxPage />}></Route>
            </>
          ) : typeaccount === DOCTOR ? (
            <>
              <Route path="/" element={<DrHomePage />}></Route>
              <Route path="exam" element={<ExamPage />} />
            </>
          ) : (
            <NotFound typeaccount={typeaccount} />
          )}
        </Route>
      ) : (
        <>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </>
      )}
    </Routes>
  );
}

export default Router;
