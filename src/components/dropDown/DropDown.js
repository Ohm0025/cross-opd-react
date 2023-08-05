import "./DropDown.css";
import DropDownPt from "./dropDownPt/DropownPt";
import { useAuth } from "../../contexts/AuthContext";

function DropDown({ isOpen, logout, closeDropDown }) {
  const { typeaccount } = useAuth();
  return (
    <ul className={`dropdown-menu ${isOpen ? "d-block" : ""}`}>
      {typeaccount === "PATIENT" ? (
        <DropDownPt closeDropDown={closeDropDown} />
      ) : (
        ""
      )}
      <li>
        <button className="dropdown-item" onClick={logout}>
          <small className="">Log Out</small>
        </button>
      </li>
    </ul>
  );
}

export default DropDown;
