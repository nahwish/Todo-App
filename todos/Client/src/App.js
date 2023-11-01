import { useEffect,useState } from "react";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { GetContext } from "./context/GetContext";
import Home from "./Page";
import Auth from "./components/Auth";


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
