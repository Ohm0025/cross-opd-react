import "./ExamPage.css";

import { Routes, Route } from "react-router-dom";

import ExamHeader from "../../features/exam/examHeader/ExamHeader";
import ExamContainer from "../../features/exam/examContainer/ExamContainer";
import PastHxPage from "../pastHxPage/PastHxPage";
import UnderlyPage from "../underlyPage/UnderlyPage";
import AllergyPage from "../allergyPage/AllergyPage";

function ExamPage() {
  return (
    <Routes>
      <Route path="/" element={<ExamHeader />}>
        <Route path="/" element={<ExamContainer />} />
        <Route path="pastHx/:encodeParams" element={<PastHxPage />} />
        <Route path="underly/:encodeParams" element={<UnderlyPage />} />
        <Route path="allergy/:encodeParams" element={<AllergyPage />} />
      </Route>
    </Routes>
  );
}

export default ExamPage;
