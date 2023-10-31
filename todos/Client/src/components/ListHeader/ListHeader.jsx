import { useContext, useState } from "react";
import Modal from "../Modal";
import { FormContext } from "../../context/FormContext";


const ListHeader = ({ listName }) => {
  const [showModalForCreate, setShowModalForCreate] = useState(false);

  let create = "";
  const { setEditMode, setShowModalCreate,showModalCreate  } = useContext(FormContext);
  const signOut = () => {
    // TODO implement login
  };

  const handleCreate = () => {
    setShowModalForCreate(true);
  };


  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => handleCreate()}>
          Agregar
        </button>
        <button className="signout" onClick={signOut}>
          Salir
        </button>
      </div>

      {showModalForCreate && (
        <Modal mode="create" closeModal={() => setShowModalForCreate(false)} />
      )}
    </div>
  );
};

export default ListHeader;
