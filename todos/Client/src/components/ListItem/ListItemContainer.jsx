import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { DeleteContext } from "../../context/DeleteContext";
import ListItem from "./LisItemItem";

export const ListItemContainer = () => {
  const { tasks } = useContext(FormContext);
  const { deleteItem } = useContext(DeleteContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return tasks?.map((task) => (
    <ListItem
      key={task.id}
      isOpen={isOpen}
      toggleDetails={toggleDetails}
      deleteItem={deleteItem}
      task={task}
    />
  ));
};
