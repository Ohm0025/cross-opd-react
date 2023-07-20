import "./IconName.css";

function IconName({ char, radius }) {
  return (
    <div className="header-icon" style={{ width: radius, height: radius }}>
      <b>{char}</b>
    </div>
  );
}

export default IconName;
