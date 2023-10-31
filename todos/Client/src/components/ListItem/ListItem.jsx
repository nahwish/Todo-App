import { useState,useContext } from "react"; 
import { FormContext } from "../../context/FormContext";
import { DeleteContext } from "../../context/DeleteContext";
import { GetContext } from "../../context/GetContext";
import ListItemContainer from "./LisItemContainer";

/**
 * Component for displaying and interacting with a task item in the list.
 * @param {Object} props - The component's props.
 * @param {Function} props.deleteItem - Function to delete the task.
 * @param {Function} props.getData - Function to fetch data.
 * @param {Object} props.task - The task data to display and edit.
 * @returns {JSX.Element} The ListItem component.
 */

const ListItem = () => {
  const [showModal, setShowModal] = useState(false);
  const { setEditMode, editMode, tasks,filteredTasks, showModalEdit, setShowModalEdit } =
    useContext(FormContext);
  const { deleteItem } = useContext(DeleteContext);


  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = async() =>{
    await setEditMode(true);
    if(editMode){
      setShowModalEdit(true);

    }
  }

  // console.log("->TAAAAKS",filteredTasks)
  return tasks?.map((task) => (
    <ListItemContainer
      key={task.id}
      filteredTasks={filteredTasks}
      toggleDetails={toggleDetails}
      handleEdit={handleEdit}
      isOpen={isOpen}
      deleteItem={deleteItem}
      showModalEdit={showModalEdit}
      task={task}
      setShowModalEdit={setShowModalEdit}
    />
  ));
};

export default ListItem;