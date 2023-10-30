import { createContext,useContext } from "react";
import { deleteApiData } from "../services/Api";
import { GetContext } from "./GetContext";
import { FormContext } from "./FormContext";
import { filterTasksByCategory } from "../utils/filter";


export const DeleteContext = createContext();

export const DeleteProvider = ({children}) =>{
  const { getData } = useContext(GetContext);
  const { tasks, setFilteredTasks } = useContext(FormContext);

  const deleteItem = async (id) => {
    try {
      const response = await deleteApiData(id);
      if (response.status === 200) {
        getData();
        filterTasksByCategory("Todo", setFilteredTasks, tasks);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const contextValue = { deleteItem };

  return (
    <DeleteContext.Provider value={contextValue}>
      {children}
    </DeleteContext.Provider>
  );
}