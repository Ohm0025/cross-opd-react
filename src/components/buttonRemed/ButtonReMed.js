import "./ButtonReMed.css";

function ButtonReMed({ handleOnClick }) {
  return (
    <div onClick={handleOnClick}>
      <button className="btn btn-secondary">Re-Med</button>
    </div>
  );
}

export default ButtonReMed;
