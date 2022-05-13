import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Context
import LoginContext from "../context/LoginContext";
//Components
import Sidebar from "./Sidebar";
function Dashboard() {
  const { id } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (id == null) navigate("/login");
  }, [id, navigate]);

  return (
    <div className="h-screen flex">
      <Sidebar />
    </div>
  );
}
export default Dashboard;
