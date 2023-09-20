import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import DrHomePage from "../pages/homePage/drHomePage/DrHomePage";
import { DOCTOR, PATIENT } from "../config/constant";

import AuthLayout from "../layouts/auth/AuthLayout";
import NotFound from "../pages/testPage/NotFound";
import HomeLayout from "../layouts/homePage/HomeLayout";

import PtHomePage from "../pages/homePage/ptHomePage/PtHomePage";
import DrugHxPage from "../pages/drugHxPage/DrugHxPage";
import ExamPage from "../pages/examPage/ExamPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import CaseDoctorContextProvider from "../contexts/CaseDoctorContext";
import ExamContextProvider from "../contexts/ExamContext";
import PastHxPage from "../pages/pastHxPage/PastHxPage";
import AllergyPage from "../pages/allergyPage/AllergyPage";

function Router() {
  const { user, typeaccount } = useAuth();

  return (
    <Routes>
      {user ? (
        <Route
          path="/"
          element={<HomeLayout user={user} typeaccount={typeaccount} />}>
          {typeaccount === PATIENT ? (
            <>
              <Route path="/" element={<PtHomePage />}></Route>
              <Route path="drug" element={<DrugHxPage />}></Route>
              <Route path="pastHistory" element={<PastHxPage />}></Route>
              <Route path="allergy" element={<AllergyPage />} />
            </>
          ) : typeaccount === DOCTOR ? (
            <Route element={<ExamContextProvider />}>
              <Route path="exam/:caseId/*" element={<ExamPage />} />
              <Route element={<CaseDoctorContextProvider />}>
                <Route path="/" element={<DrHomePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Route>
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
