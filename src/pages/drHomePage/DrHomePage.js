import { Outlet } from "react-router-dom";
import "./DrHomePage.css";
import IconName from "../../components/iconName/IconName";

function DrHomePage() {
  return (
    <div>
      <div className="search-header">
        <div className="header-user">
          <div className="user-tag">
            Dr.Porramat Thapdfeo<small>Doctor</small>
          </div>
          <IconName char={"P"} />
        </div>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default DrHomePage;
