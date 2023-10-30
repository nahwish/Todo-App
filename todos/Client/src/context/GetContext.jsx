import { createContext, useContext } from "react";
import { FormContext } from "./FormContext";

export const GetContext = createContext();

export const GetContextProvider = ({ children }) => {
  const { userMail } = useContext(FormContext);


  const getData = async () => {
    try {
      const response = await fetchApiData(userMail);
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
