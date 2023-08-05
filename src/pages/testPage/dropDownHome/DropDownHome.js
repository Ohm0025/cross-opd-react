function DropDownHome({ isList }) {
  return (
    <ul className={`dropdown-menu ${isList ? "d-block" : ""}`}>
      <li>
        <button className="dropdown-item">
          <small className="">Log Out</small>
        </button>
      </li>
    </ul>
  );
}

export default DropDownHome;
