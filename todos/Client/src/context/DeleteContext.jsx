import { createContext,useContext } from "react";
import { deleteApiData } from "../services/Api";
import { GetContext } from "./GetContext";


export const DeleteContext = createContext();

export const DeleteProvider = ({children}) =>{
  const { getData } = useContext(GetContext);

  const deleteItem = async (id) => {
    try {
      const response = await deleteApiData(id);
      if (response.status === 200) {
        await getData();
      }
      alert("eliminado")
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