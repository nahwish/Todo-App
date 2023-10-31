import { useEffect } from "react";
import { useContext } from "react";
import { GetContext } from "./context/GetContext";
import Home from "./Page";


const App = () => {
  const { getData } = useContext(GetContext);


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Home />
    </div>
  );
};

export default App;
