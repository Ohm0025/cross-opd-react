import DrugContextProvider from "../../contexts/DrugContext";
import DrugContainer from "../../features/drugHx/drugContainer/DrugContainer";
import "./DrugHxPage.css";

function DrugHxPage() {
  return (
    <DrugContextProvider>
      <DrugContainer />
    </DrugContextProvider>
  );
}

export default DrugHxPage;
