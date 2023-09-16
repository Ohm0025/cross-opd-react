import "./ExamPage.css";

import { Routes, Route } from "react-router-dom";

import ExamHeader from "../../features/exam/examHeader/ExamHeader";
import ExamContainer from "../../features/exam/examContainer/ExamContainer";
import PastHxPage from "../pastHxPage/PastHxPage";
import UnderlyPage from "../underlyPage/UnderlyPage";
import { useExam } from "../../contexts/ExamContext";

function ExamPage() {
  const { patientObj } = useExam();
  console.log(patientObj);
  return (
    <Routes>
      <Route path="/" element={<ExamHeader />}>
        <Route path="/" element={<ExamContainer />} />
        <Route path="pastHx/:encodeParams" element={<PastHxPage />} />
        <Route path="underly/:encodeParams" element={<UnderlyPage />} />
      </Route>
    </Routes>
  );
}

export default ExamPage;
