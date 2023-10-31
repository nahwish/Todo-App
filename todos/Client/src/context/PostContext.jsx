import { createContext,useContext } from "react";
import { createApiData } from "../services/Api";
import { FormContext } from "./FormContext";
import { GetContext } from "./GetContext";


export const PostContext = createContext();


export const PostContextProvider = ({children}) =>{
    const { setShowModalCreate, setEditMode } = useContext(FormContext);
    const { getData } = useContext(GetContext);

    const postData = async (data) => {
      try {
        const response = await createApiData(data);
        if (response.status === 200) {
          getData();
          setShowModalCreate(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

  const contextValue = { postData };
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
}

