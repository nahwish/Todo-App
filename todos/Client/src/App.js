import { useEffect } from "react";
import { useContext } from "react";
import { GetContext } from "./context/GetContext";
import Home from "./Page";
import Auth from "./components/Auth";


const App = () => {
  const { getData } = useContext(GetContext);
  const authToken = false;

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
