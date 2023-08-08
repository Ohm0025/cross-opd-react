import { useLoading } from "./contexts/LoadingContext";
import Router from "./route/Router";
import Spinner from "./components/Spinner";
import { useAuth } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  const { loading } = useLoading();
  const { initialLoading } = useAuth();

  if (initialLoading) return <Spinner />;
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="2000"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default App;
