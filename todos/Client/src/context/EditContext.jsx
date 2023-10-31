import { createContext,useContext } from "react";
import { editApiData } from "../services/Api";
import { GetContext } from "./GetContext";
import { FormContext } from "./FormContext";

export const EditContext = createContext();

export const EditContextProvider = ({children}) =>{
  const { getData } = useContext(GetContext);
  const { setShowModalEdit, tasks, data,setEditMode } = useContext(FormContext);


  const editData = async (e,task,data) => {
    e.preventDefault();
    
    try {
      const response = await editApiData(task, data);
      if (response.status === 200) {
        setShowModalEdit(false);
        getData();
        setEditMode(false);
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