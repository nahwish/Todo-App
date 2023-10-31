import { createContext, useContext } from "react";
import { FormContext } from "./FormContext";
import { fetchApiData } from "../services/Api";

export const GetContext = createContext();

export const GetContextProvider = ({ children }) => {
  const { userMail, setTasks, setFilteredTasks } = useContext(FormContext);

  const getData = async () => {
    try {
      const response = await fetchApiData(userMail);
      setFilteredTasks(response);
      setTasks(response);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {getData}
  return (
    <GetContext.Provider value={contextValue}>{children}</GetContext.Provider>
  );
};
