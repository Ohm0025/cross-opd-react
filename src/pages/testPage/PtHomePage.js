import { useAuth } from "../../contexts/AuthContext";

function PtHomePage() {
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };
  return (
    <div>
      <h1>PATIENT HOMepage</h1>;<button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}

export default PtHomePage;
