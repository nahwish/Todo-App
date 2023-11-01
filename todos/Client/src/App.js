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

  useEffect(() => {
    if(authToken) getData()
  }, []);

  return (
    <div className="app">
      {!authToken && <Auth/>}
      {authToken && <Home />}
    </div>
  );
};

export default App;
