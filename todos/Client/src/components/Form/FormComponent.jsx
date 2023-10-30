import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { EditContext } from "../../context/EditContext";

export const FormComponent = ({postData,}) => {
  const {
    arrayoptions,
    isChecked,
    setIsChecked,
    setData,
    data,
    editMode,
    setEditMode,
  } = useContext(FormContext);
  const { editData } = useContext(EditContext);

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
