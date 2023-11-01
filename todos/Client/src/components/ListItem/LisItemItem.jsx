import { useState } from "react";
import { useCookies } from "react-cookie";

import CheckIcon from "../Icons/CheckIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import Modal from "../Modal";
import TrashIcon from "../Icons/TrashIcon";

const ListItem = (props) => {
  const {isOpen,toggleDetails,deleteItem,task,showModalForEdit,setShowModalForEdit,} = props;
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;

  return (
    <>
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
          <button className="edit" onClick={() => setShowModalForEdit(true)}>
            <EditIcon />
          </button>
          <button
            className="delete"
            onClick={() => deleteItem(task.id, userEmail)}
          >
            <TrashIcon />
          </button>
        </div>
        {showModalForEdit && (
          <Modal
            mode="edit"
            task={task}
            closeModal={() => setShowModalForEdit(false)}
          />
        )}
      </div>
    </>
  );
};

export default ListItem;
