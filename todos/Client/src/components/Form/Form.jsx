import { EditIcon } from "../Icons/EditIcon/EditIcon";
import FileIcon from "../Icons/FileIcon";

export const Form = ({
  handleSubmit,
  handleInputChange,
  arrayoptions,
  data,
  isCreating,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        name="title"
        value={data?.title}
        onChange={handleInputChange}
        placeholder="Título de la tarea"
        
      />
      <textarea
        required
        name="description"
        value={data?.description}
        onChange={handleInputChange}
        placeholder="Descripción de la tarea..."
      />
      <div className="label-checkbox">
        <label htmlFor="checkbox">
          {data?.progress ? "Tarea completada" : "Tarea pendiente"}
        </label>
        <input
          type="checkbox"
          name="progress"
          id="checkbox"
          checked={data?.progress}
          onChange={handleInputChange}
        />
        <label htmlFor="select">Tipo de Nota</label>
        <select
          id="select"
          name="category"
          onChange={handleInputChange}
          value={data?.category}
        >
          {arrayoptions?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button className="editIcon " type="submit">
        {isCreating ? <FileIcon/> : <EditIcon />}
      </button>
    </form>
  );
};
