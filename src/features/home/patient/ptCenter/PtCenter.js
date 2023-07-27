import { useHomePt } from "../../../../contexts/HomePtContext";
import "./PtCenter.css";

function PtCenter() {
  const { input, openCard, handleChangeInput } = useHomePt();

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
        <input
          value={input.location}
          type="text"
          id="location"
          name="location"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>

      <button onClick={openCard}>{"เริ่มเปิดบัตร"}</button>
    </div>
  );
}

export default PtCenter;
