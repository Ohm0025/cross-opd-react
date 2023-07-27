import { useAuth } from "../../contexts/AuthContext";

function NotFound({ typeaccount }) {
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };
  return (
    <div>
      <h1>Not found page</h1>
      <button onClick={handleLogOut}>LogOut</button>
      <p>{typeaccount}</p>
    </div>
  );
}

export default NotFound;
