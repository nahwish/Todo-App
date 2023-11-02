import { createContext, useContext } from "react";
import { FormContext } from "./FormContext";
import { fetchApiData } from "../services/Api";

export const GetContext = createContext();

export const GetContextProvider = ({ children }) => {
  const {  setTasks, setFilteredTasks } = useContext(FormContext);

  const getData = async (userMail,category) => {
    try {
      const response = await fetchApiData(userMail);
      setFilteredTasks(response);
        if (category && category !== "Ver todo") {
          return setTasks(response.filter((task) => task.category === category))
        }else{
          setTasks(response)
        }
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {getData}
  return (
    <GetContext.Provider value={contextValue}>{children}</GetContext.Provider>
  );
};
