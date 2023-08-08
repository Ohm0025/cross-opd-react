import "./PhysicalExam.css";
import SubFormModal from "./subFormModal/SubFormModal";
import VitalSignForm from "./vitalSignForm/VitalSignForm";

function PhysicalExamModal() {
  return (
    <div>
      <VitalSignForm />
      <SubFormModal
        typePe={"HEENT"}
        listTemplate={["detail HEENT 1", "detail HEENT 2", "detail HEENT 3"]}
      />
      <SubFormModal
        typePe={"Lung"}
        listTemplate={["detail lung 1", "detail lung 2", "detail lung 3"]}
      />
      <SubFormModal
        typePe={"Heart"}
        listTemplate={["detail HEENT 1", "detail HEENT 2", "detail HEENT 3"]}
      />
      <SubFormModal
        typePe={"Abdomen"}
        listTemplate={["detail lung 1", "detail lung 2", "detail lung 3"]}
      />
      <SubFormModal
        typePe={"Extremities"}
        listTemplate={["detail HEENT 1", "detail HEENT 2", "detail HEENT 3"]}
      />
      <SubFormModal
        typePe={"Neuro"}
        listTemplate={["detail lung 1", "detail lung 2", "detail lung 3"]}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="8"
        className="form-control"
      ></textarea>
      <button className="button-addPeTemp">Finish Record</button>
    </div>
  );
}

export default PhysicalExamModal;
