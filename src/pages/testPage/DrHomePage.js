import { useAuth } from "../../contexts/AuthContext";

function DrHomePage() {
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };
  return (
    <div>
      <h1>DOCTOR HOMepage</h1>;<button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}

export default DrHomePage;
