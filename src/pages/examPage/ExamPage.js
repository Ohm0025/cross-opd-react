import "./ExamPage.css";

import { Routes, Route } from "react-router-dom";

import ExamHeader from "../../features/exam/examHeader/ExamHeader";
import ExamContainer from "../../features/exam/examContainer/ExamContainer";
import PastHxPage from "../pastHxPage/PastHxPage";
import UnderlyPage from "../underlyPage/UnderlyPage";
import AllergyPage from "../allergyPage/AllergyPage";
import DrugHxPage from "../drugHxPage/DrugHxPage";
import LabHxPage from "../labHxPage/LabHxPage";
import ImgHxPage from "../imgHxPage/ImgHxPage";

function ExamPage() {
  return (
    <Routes>
      <Route path="/" element={<ExamHeader />}>
        <Route path="/" element={<ExamContainer />} />
        <Route path="pastHx/:encodeParams" element={<PastHxPage />} />
        <Route path="underly/:encodeParams" element={<UnderlyPage />} />
        <Route path="allergy/:encodeParams" element={<AllergyPage />} />
        <Route path="drug/:encodeParams" element={<DrugHxPage />} />
        <Route path="labHx/:encodeParams" element={<LabHxPage />} />
        <Route path="imgHx/:encodeParams" element={<ImgHxPage />} />
      </Route>
    </Routes>
  );
}

export default ExamPage;
