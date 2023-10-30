import { useState,useContext } from "react"; 
import { FormContext } from "../../context/FormContext";
import CheckIcon from "../Icons/CheckIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import Modal from "../Modal";
import TrashIcon from "../Icons/TrashIcon";

/**
 * Component for displaying and interacting with a task item in the list.
 * @param {Object} props - The component's props.
 * @param {Function} props.deleteItem - Function to delete the task.
 * @param {Function} props.getData - Function to fetch data.
 * @param {Object} props.task - The task data to display and edit.
 * @returns {JSX.Element} The ListItem component.
 */

const ListItem = ({ deleteItem, getData,task }) => {
  // const [showModal, setShowModal] = useState(false);
  const { showModal, setShowModal, setEditMode } = useContext(FormContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () =>{
    setShowModal(true);
    setEditMode(true);
  }

  return (
    <div className="list-item">
      <div className="info-container">
        <CheckIcon task={task?.progress} />
        <p className="task-title">{task.title}</p>
      </div>
      <details open={isOpen}>
        <summary onClick={toggleDetails}>Detalle</summary>
        <div>
          <p>{task.description}</p>
        </div>
      </details>
      <p className="">{task.category}</p>

      <div className="button-container">
        <button className="edit" onClick={() => handleEdit()}>
          <EditIcon />
        </button>
        <button className="delete" onClick={() => deleteItem(task.id)}>
          <TrashIcon />
        </button>
      </div>
      {showModal && (
        <Modal
          modal={"editar"}
          setShowModal={setShowModal}
          task={task}
          getData={getData}
        />
      )}
    </div>
  );
};

export default ListItem;