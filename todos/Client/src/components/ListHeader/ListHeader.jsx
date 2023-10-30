import { useState } from "react";
import Modal from "../Modal";

/**
 * Header component for a list with options to add and sign out.
 * @param {Object} props - The component's props.
 * @param {string} props.listName - The name of the list.
 * @param {Function} props.getData - Function to fetch data.
 * @returns {JSX.Element} The ListHeader component.
 */

const ListHeader = ({ listName,getData }) => {
  const [showModal, setShowModal] = useState(false);
  const signOut = () => {
    // TODO implement login
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          Agregar
        </button>
        <button className="signout" onClick={signOut}>
          Salir
        </button>
      </div>

      {showModal && (
        <Modal
          modal={"create"}
          setShowModal={setShowModal}
          getData={getData}
         
        />
      )}
    </div>
  );
};

export default ListHeader;
