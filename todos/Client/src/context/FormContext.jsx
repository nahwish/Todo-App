import {  createContext,useState } from "react";


export const FormContext = createContext();
/**
 * Context for managing form-related data and state.
 * @typedef {Object} FormContext
 * @property {Array<string>} arrayoptions - An array of available task categories.
 * @property {string} selectedCategory - The currently selected task category.
 * @property {Function} setSelectedCategory - Function to set the selected category.
 * @property {Array<Object>} filteredTasks - A list of tasks filtered by the selected category.
 * @property {Function} setFilteredTasks - Function to set the filtered tasks.
 * @property {boolean} showModal - Flag to control the visibility of a modal.
 * @property {Function} setShowModal - Function to set the modal visibility.
 * @property {boolean} isOpen - Flag to control the visibility of details.
 * @property {Function} setIsOpen - Function to set the details visibility.
 * @property {Array<Object>} tasks - A list of all tasks.
 * @property {Function} setTasks - Function to set the task list.
 * @property {boolean} isChecked - Flag to control the state of a checkbox.
 * @property {Function} setIsChecked - Function to set the checkbox state.
 * @property {string} userMail - The email of the user.
 */

export const FormContextProvider = ({ children }) => {
  const arrayoptions = ["Todo","Compras", "Turnos", "Nota personal"];
  const userMail = "chawi@test.com";
  

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTasks, setFilteredTasks] = useState();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);


  const contextValue = {
    arrayoptions,
    selectedCategory,
    setSelectedCategory,
    filteredTasks,
    setFilteredTasks,
    showModalCreate,
    setShowModalCreate,
    showModalEdit,
    setShowModalEdit,
    isOpen,
    setIsOpen,
    tasks,
    setTasks,
    isChecked,
    setIsChecked,
    userMail,
    editMode,
    setEditMode,
  };
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
