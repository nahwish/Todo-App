import { useContext } from "react";
import { FormContext } from "../../context/FormContext";


export const FormComponent = ({
  data,
  editMode,
  editData,
  setData,
  postData,
}) => {
  const { arrayoptions, isChecked, setIsChecked } =
    useContext(FormContext);
  const { title, description, progress, category } = data;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setIsChecked(checked);
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form>
      <input
        type="text"
        required
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Titulo de la tarea"
      />
      <textarea
        required
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Descripción de la tarea..."
      />
      <label htmlFor="check">
        {isChecked ? "Tarea completada" : "Tarea pendiente"}{" "}
      </label>
      <input
        type="checkbox"
        name="progress"
        id="checkbox"
        value={progress}
        onChange={handleChange}
      />
      <select name="category" onChange={handleChange} value={category}>
        <option value="">Tipo de nota</option>
        {arrayoptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <input
        className="modal"
        type="submit"
        onClick={editMode ? editData : postData}
      />
    </form>
  );
};
