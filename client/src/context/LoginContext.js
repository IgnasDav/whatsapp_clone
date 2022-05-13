import { createContext } from "react";
//hooks
import useLocalStorage from "../hooks/useLocalStorage";
const ID = "";
const LoginContext = createContext({
  id: ID,
});

const LoginProvider = ({ children }) => {
  const [id, setId] = useLocalStorage("id");
  return (
    <LoginContext.Provider value={{ id, onIdSubmit: setId }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContext;
export { LoginProvider };
