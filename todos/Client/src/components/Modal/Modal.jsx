import { useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";

import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import FormComponent from "../Form";
import { createApiData, editApiData } from "../../services/Api";

/**
 * Modal component for creating or editing tasks.
 * @param {Object} props - The component's props.
 * @param {boolean} props.modal - The mode of the modal ('crear' or 'editar').
 * @param {Function} props.setShowModal - Function to control the modal visibility.
 * @param {Function} props.getData - Function to fetch data.
 * @param {Object} props.task - Task data for editing (optional).
 * @returns {JSX.Element} The Modal component.
 */

export const Modal = ({ modal, setShowModal, getData, task }) => {
  const { setSelectedCategory } = useContext(FormContext);
    const editMode = modal === "editar" ? true : false;
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : "chawi@test.com",
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : null,
    description: editMode ? task.description : null,
    category: editMode ? task.category : null,
    date: editMode ? task.date : new Date(),
  });
  useEffect(() => {
    getData();
  }, [setSelectedCategory]);


  /**
   * Handles the submission of new task data.
   * @param {Event} e - The form submission event.
   * @returns {Promise<void>}
   */

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await createApiData(data);
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Handles the submission of edited task data.
   * @param {Event} e - The form submission event.
   * @returns {Promise<void>}
   */

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await editApiData(task, data);
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Vamos a {modal} la tarea</h3>
          <button>
            <CloseIcon setShowModal={setShowModal} />
          </button>
        </div>
        <FormComponent
          data={data}
          setData={setData}
          isChecked={isChecked}
          editMode={editMode}
          editData={editData}
          setShowModal={setShowModal}
          postData={postData}
        />
      </div>
    </div>
  );
};
