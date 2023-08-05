import { useNavigate } from "react-router-dom";

function DropDownPt({ closeDropDown }) {
  const navigate = useNavigate();
  return (
    <>
      <li>
        <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
          <small>โรคประจำตัว</small>
        </button>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1" />
      </li>
      <li>
        <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
          <small>ประวัติการแพ้ยา</small>
        </button>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1" />
      </li>
      <li>
        <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
          <small>ประวัติการรักษา</small>
        </button>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1" />
      </li>
      <li>
        <button
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={() => {
            navigate("/drug");
            closeDropDown();
          }}
        >
          <small>ประวัติการใช้ยา</small>
        </button>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1" />
      </li>
    </>
  );
}

export default DropDownPt;
