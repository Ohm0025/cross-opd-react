import { useLogin } from "../../../../../../contexts/LoginContext";
import "./TypeSide.css";

function TypeSide({ pic, dis, value, handleClick }) {
  const { typeLoginAccount } = useLogin();
  return (
    <div
      className={`login-type-side ${
        typeLoginAccount === value ? "activated" : ""
      }`}
      onClick={() => handleClick(value)}
    >
      <img src={pic} alt={`icon_${dis}`} />
      <small>{dis}</small>
    </div>
  );
}

export default TypeSide;
