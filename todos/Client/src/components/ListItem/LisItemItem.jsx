import { useCookies } from "react-cookie";

import CheckIcon from "../Icons/CheckIcon";
import { EditIcon } from "../Icons/EditIcon/EditIcon";
import Modal from "../Modal";
import TrashIcon from "../Icons/TrashIcon";
import ShoppingIcon from "../Icons/ShoppingIcon";
import NotesIcon from "../Icons/NotesIcon";
import { EyeIcon } from "../Icons/EyeIcon/EyeIcon";

const ListItem = (props) => {
  const {isOpen,toggleDetails,deleteItem,task,showModalForEdit,setShowModalForEdit} = props;
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const userEmail = cookies.Email;

  const Icon = (category) =>{
    if(category === "Compras"){
      return <ShoppingIcon/>
    }else if(category === "Turnos"){
      return <NotesIcon/>
    }
  }


  return (
    <>
      <div className="list-item">
        <div className="info-container">
          <CheckIcon task={task?.progress} />
          <span className="list-category">{Icon(task.category)}</span>
          <p className={`task-title ${task?.progress && "checked"}`}>
            {task.title}
          </p>
        </div>

        {/* <details open={showModalForEdit === task.id && isOpen}>
          <summary onClick={toggleDetails}>Detalle</summary>
          <div className="description-taskitem">
            <div className="description-container">
              <p>{task.description}</p>
            </div>
          </div>
        </details> */}

        <div className="button-container">
          <button className="edit" onClick={() => setShowModalForEdit(task.id)}>
            <EyeIcon/>
          </button>
          <button
            className="delete"
            onClick={() => deleteItem(task.id, userEmail, task.category)}
          >
            <TrashIcon />
          </button>
        </div>
        {showModalForEdit === task.id && (
          <Modal
            mode="edit"
            task={task}
            closeModal={() => setShowModalForEdit(null)}
          />
        )}
      </div>
    </>
  );
};

export default ListItem;
