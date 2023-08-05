import "./IconName.css";

function IconName({ char, radius, onClick }) {
  return (
    <div
      className="header-icon"
      style={{ width: radius, height: radius }}
      onClick={onClick}
    >
      <b>{char}</b>
    </div>
  );
}

export default IconName;
