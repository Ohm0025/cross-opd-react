import "./AllergyPage.css";
import AllergyContextProvider from "../../contexts/AllergyContext";
import AllergyContainer from "../../features/allergy/allergyContainer/AllergyContainer";

function AllergyPage() {
  return (
    <AllergyContextProvider>
      <AllergyContainer />
    </AllergyContextProvider>
  );
}

export default AllergyPage;
