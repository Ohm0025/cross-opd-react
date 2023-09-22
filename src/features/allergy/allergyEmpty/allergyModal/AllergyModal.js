import { useEffect, useState } from "react";
import "./AllergyModal.css";

function AllergyModal({ addAllergy, closeModal, isDestroy }) {
  //allerObj:{name:"",symptom:"",editor:"",dateAt:""}
  const [allerObj, setAllerObj] = useState({
    allerName: "",
    allerSymp: "",
    // allerEditor: "",
    // dateAt: new Date(),
  });
  const [isError, setIsError] = useState({
    name: "",
    symp: "",
  });

  const handleChangeAllerObj = (e) => {
    setAllerObj((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (isDestroy) {
      console.log("emgiuehpgj");
      setIsError((prev) => {
        return {
          name: "",
          symp: "",
        };
      });
      setAllerObj((prev) => {
        return { allerName: "", allerSymp: "" };
      });
    }
  }, [isDestroy]);
  return (
    <div className="allergy-modal">
      <input
        name="allerName"
        className={`form-control ${isError?.name ? "error-aller" : ""}`}
        value={allerObj?.allerName}
        placeholder="allergy drug name"
        onChange={handleChangeAllerObj}></input>
      <small className={`${isError ? "d-block" : ""}`}>{isError?.name}</small>
      <textarea
        cols={3}
        name="allerSymp"
        className={`form-control ${isError?.symp ? "error-aller" : ""}`}
        value={allerObj?.allerSymp}
        placeholder="allergy symptoms"
        onChange={handleChangeAllerObj}></textarea>
      <small className={`${isError ? "d-block" : ""}`}>{isError?.symp}</small>
      <button
        onClick={() => {
          addAllergy(allerObj).then((errObj) => {
            setIsError(errObj);
            if (!errObj?.name && !errObj?.symp) {
              console.log(errObj);
              closeModal();
            }
          });
        }}>
        Add
      </button>
    </div>
  );
}

export default AllergyModal;
