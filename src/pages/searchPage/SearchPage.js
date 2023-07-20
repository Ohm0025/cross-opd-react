import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div>
      <div className="search-container">
        <div className="time-box">
          <span>
            09:00 <small>AM</small>
          </span>
          <span>27 Jul, 2022</span>
        </div>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            placeholder="insert patient id"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="unfinish-table">
          <tr>Unfinish Case</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>
            <span>page</span>
            <span>{"< 1 >"}</span>
          </tr>
        </table>
        <table className="unfinish-table">
          <tr>Finish Case</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>123456</tr>
          <tr>
            <span>page</span>
            <span>{"< 1 >"}</span>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SearchPage;
