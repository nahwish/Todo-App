import {  createContext,useState } from "react";


export const FormContext = createContext();


export const FormContextProvider = ({ children }) => {
  const arrayoptions = ["Ver todo", "Turnos", "Compras", "Nota personal"];
  const userMail = "chawi@test.com";
  

  const [selectedCategory, setSelectedCategory] = useState("");// guarda la categoria elegida
  const [filteredTasks, setFilteredTasks] = useState();//guarda un backup de la informacion original
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);//
  const [isChecked, setIsChecked] = useState(false);
  /* AUTH */
  const isLogIn = false;

  const contextValue = {
    arrayoptions,
    selectedCategory,
    setSelectedCategory,
    filteredTasks,
    setFilteredTasks,
    isOpen,
    setIsOpen,
    tasks,
    setTasks,
    isChecked,
    setIsChecked,
    userMail,
    isLogIn,
  };
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
