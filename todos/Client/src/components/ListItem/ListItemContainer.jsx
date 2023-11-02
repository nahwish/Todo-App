import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { DeleteContext } from "../../context/DeleteContext";
import ListItem from "./LisItemItem";

export const ListItemContainer = () => {
  const { tasks } = useContext(FormContext);
  const { deleteItem } = useContext(DeleteContext);

  /* LOCAL STATE */
  const [isOpen, setIsOpen] = useState(false);
  const [showModalForEdit, setShowModalForEdit] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return tasks?.map((task,index) => (
    <ListItem
      key={index}
      isOpen={isOpen}
      toggleDetails={toggleDetails}
      deleteItem={deleteItem}
      task={task}
      showModalForEdit={showModalForEdit}
      setShowModalForEdit={setShowModalForEdit}
    />
  ));
};
