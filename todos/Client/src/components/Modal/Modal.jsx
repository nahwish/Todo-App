import CloseIcon from "../Icons/CloseIcon";
import FormContainer from "../Form";


export const Modal = ({ mode, task, closeModal }) => {
  const isCreating = mode === "create";

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3 className="title-task">
            Vamos a{" "}
            <span className={`${isCreating ? "creating" : "editing"}`}>
              {isCreating ? "Crear" : "Editar"}
            </span>{" "}
            la tarea
          </h3>
          <button>
            <CloseIcon setShowModal={closeModal} />
          </button>
        </div>
        <FormContainer
          isCreating={isCreating}
          task={task}
          setShowModalForEdit={closeModal}
        />
      </div>
    </div>
  );
};
