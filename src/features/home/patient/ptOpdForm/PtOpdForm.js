import "./PtOpdForm.css";
import { useHomePt } from "../../../../contexts/HomePtContext";

function PtOpdForm() {
  const {
    input,
    openCard,
    handleChangeInput,
    isEdit,
    sendEditCard,
    errMessage,
  } = useHomePt();
  return (
    <div className="pt-center">
      <div>
        <label htmlFor="chiefComplaintFirst">
          {"อาการที่ทำให้มาโรงพยาบาล"}
        </label>
        <textarea
          value={input.chiefComplaintFirst}
          className="form-control"
          id="chiefComplaintFirst"
          name="chiefComplaintFirst"
          onChange={handleChangeInput}
          cols="2"
        />
      </div>

      <div>
        <label htmlFor="presentIllnessFirst">{"รายละเอียดของอาการ"}</label>
        <textarea
          value={input.presentIllnessFirst}
          className="form-control"
          id="presentIllnessFirst"
          name="presentIllnessFirst"
          onChange={handleChangeInput}
          cols="50"
          rows="5"
        />
      </div>

      <div>
        <label htmlFor="location">{"สถานที่ที่เข้าตรวจ"}</label>
        <textarea
          value={input.location}
          className={`${errMessage && "isError"} form-control`}
          id="locatioin"
          name="location"
          onChange={handleChangeInput}
          cols="50"
          rows="1"
        />
        {errMessage && <small className="text-danger">{errMessage}</small>}
      </div>

      <button
        className="pt-center-button"
        onClick={isEdit ? sendEditCard : openCard}>
        {isEdit ? "แก้ไขบัตร" : "เริ่มเปิดบัตร"}
      </button>
    </div>
  );
}

export default PtOpdForm;
