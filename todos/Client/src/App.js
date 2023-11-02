import { useEffect } from "react";
import { useContext } from "react";
import { useCookies } from "react-cookie";
/* CONTEXT */
import { GetContext } from "./context/GetContext";
/* COMPONENTS*/
import Home from "./Page";
import Auth from "./components/Auth";
import { FormContext } from "./context/FormContext";


const App = () => {
  const { getData } = useContext(GetContext);
  const [cookies,setCookie,removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;


  useEffect(() => {
    getData(userEmail);
  }, []);

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && <Home userEmail={userEmail} />}
      <p className="copyright"> Creado con ♥️</p>
    </div>
  );
};

export default App;
