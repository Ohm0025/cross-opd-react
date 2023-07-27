import { Outlet } from "react-router-dom";
import IconName from "../../components/iconName/IconName";
import "./HomeLayout.css";
import { useAuth } from "../../contexts/AuthContext";

function HomeLayout({ user, typeaccount }) {
  const { logout } = useAuth();
  return (
    <>
      <div className="home-header">
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>

        <div className="header-user">
          <div className="user-tag">
            {user.firstName + " " + user.lastName}
            <small>{typeaccount}</small>
          </div>
          <IconName char={user.firstName[0].toUpperCase()} />
        </div>
      </div>
      <div className="home-container">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
