import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./ButtonBack.css";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button className="button-back" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
}

export default ButtonBack;
