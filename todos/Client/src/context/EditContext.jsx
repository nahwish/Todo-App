import { createContext,useContext } from "react";
import { editApiData } from "../services/Api";
import { GetContext } from "./GetContext";
import { FormContext } from "./FormContext";

export const EditContext = createContext();

export const EditContextProvider = ({children}) =>{
  const { getData } = useContext(GetContext);
  const { setShowModal,tasks,data } = useContext(FormContext);


  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await editApiData(tasks, data);
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };


const contextValue = { editData };
  return (
    <EditContext.Provider value={contextValue}>{children}</EditContext.Provider>
  )
}