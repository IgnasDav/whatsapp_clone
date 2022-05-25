import { useRef, useContext, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";
//Context
import LoginContext from "../context/LoginContext";
//Components
import Button from "./Button";
function Login() {
  const { id, onIdSubmit } = useContext(LoginContext);
  const navigate = useNavigate();
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };
  const createNewUser = () => {
    onIdSubmit(uuidV4());
  };
  useEffect(() => {
    if (id.length > 0) {
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className=" flex w-screen justify-center items-center h-screen">
      <form className="p-4 w-screen" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label for="loginId" className="py-2 w-fit">
            Enter Your Id{" "}
          </label>
          <input
            className="border-2 border-slate-200 w-full rounded h-10"
            type="text"
            name="id"
            id="loginId"
            required
            ref={idRef}
          />
          {id}
        </div>
        <div className="mt-5">
          <Button type="submit" className={"bg-blue-600 mr-2"}>
            Login
          </Button>
          <Button className={"bg-stone-500 "} onClick={createNewUser}>
            Create A New Id
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
