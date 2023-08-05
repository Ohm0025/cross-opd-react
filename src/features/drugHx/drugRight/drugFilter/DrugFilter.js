import "./DrugFilter.css";

function DrugFilter() {
  return (
    <div className="nav-item drug-filter">
      <b>Filter Drug</b>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          All drug type
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Only regular drug
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Only underlying drug
        </label>
      </div>
    </div>
  );
}

export default DrugFilter;
