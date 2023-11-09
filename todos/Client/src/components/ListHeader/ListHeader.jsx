import { useState } from "react";
import Modal from "../Modal";
import { useCookies } from "react-cookie";

const ListHeader = ({ listName }) => {
  const [showModalForCreate, setShowModalForCreate] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();

  const signOut = () => {
    // TODO implement login
    removeCookie('Email')
    removeCookie("AuthToken");
    window.location.reload()
  };

  const handleCreate = () => {
    setShowModalForCreate(true);
  };


  return (
    <div className="list-header">
      <h1 className="lisName">{listName}</h1>
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
