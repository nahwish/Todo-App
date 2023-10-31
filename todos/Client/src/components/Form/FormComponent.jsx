import { useContext,useState } from "react";
import { FormContext } from "../../context/FormContext";
import { EditContext } from "../../context/EditContext";
import { PostContext } from "../../context/PostContext";

export const FormContainer = ({ isCreating, task, setShowModalForEdit }) => {
  const { postData } = useContext(PostContext);
  const { editData } = useContext(EditContext);
  const { arrayoptions } = useContext(FormContext);
  // Los estados del formulario

  const [data, setData] = useState({
    user_email: !isCreating ? task?.user_email : "chawi@test.com",
    title: !isCreating ? task?.title : "",
    progress: !isCreating ? task?.progress : false,
    description: !isCreating ? task?.description : "",
    category: !isCreating ? task?.category : "",
    date: !isCreating ? task?.date : new Date(),
  });

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreating) {
      postData(e, data);
    } else {
      editData(e, task, data);
    }
    setShowModalForEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        name="title"
        value={data.title}
        onChange={handleInputChange}
        placeholder="Título de la tarea"
      />
      <textarea
        required
        name="description"
        value={data.description}
        onChange={handleInputChange}
        placeholder="Descripción de la tarea..."
      />
      <label htmlFor="check">
        {data.progress ? "Tarea completada" : "Tarea pendiente"}
      </label>
      <input
        type="checkbox"
        name="progress"
        id="checkbox"
        checked={data.progress}
        onChange={handleInputChange}
      />
      <select
        name="category"
        onChange={handleInputChange}
        value={data.category}
      >
        <option value="">Tipo de nota</option>
        {arrayoptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button className="modal" type="submit">
        {isCreating ? "Crear" : "Editar"}
      </button>
    </form>
  );
};


