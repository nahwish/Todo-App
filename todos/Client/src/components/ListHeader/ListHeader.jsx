import { useState } from "react";
import Modal from "../Modal";

const ListHeader = ({ listName }) => {
  const [showModalForCreate, setShowModalForCreate] = useState(false);

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
