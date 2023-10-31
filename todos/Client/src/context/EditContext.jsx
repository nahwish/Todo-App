import { createContext, useContext } from "react";
import { editApiData } from "../services/Api";
import { GetContext } from "./GetContext";

export const EditContext = createContext();

export const EditContextProvider = ({ children }) => {
  const { getData } = useContext(GetContext);

  const editData = async (task, data) => {
    try {
      const response = await editApiData(task, data);
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = { editData };
  return (
    <EditContext.Provider value={contextValue}>{children}</EditContext.Provider>
  );
};
