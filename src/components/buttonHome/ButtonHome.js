import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./ButtonHome.css";
import { useNavigate } from "react-router-dom";

function ButtonHome() {
  const navigate = useNavigate();
  return (
    <button className="button-home" onClick={() => navigate("/")}>
      <FontAwesomeIcon icon={faHome} />
    </button>
  );
}

export default ButtonHome;
