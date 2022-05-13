import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

//Components
import Login from "./Login";
import Dashboard from "./Dashboard";
//Context
import LoginContext from "../context/LoginContext";
function App() {
  const { id } = useContext(LoginContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
