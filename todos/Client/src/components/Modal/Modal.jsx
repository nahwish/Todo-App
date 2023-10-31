import CloseIcon from "../Icons/CloseIcon";
import FormComponent from "../Form";


export const Modal = ({ mode, task, closeModal }) => {
  const isCreating = mode === "create";

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Vamos a {isCreating ? "Crear" : "Editar"} la tarea</h3>
          <button>
            <CloseIcon setShowModal={closeModal} />
          </button>
        </div>
        <FormComponent
          isCreating={isCreating}
          task={task}
          setShowModalForEdit={closeModal}
        />
      </div>
    </div>
  );
};
