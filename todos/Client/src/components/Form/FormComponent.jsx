import { useContext,useState } from "react";
import { FormContext } from "../../context/FormContext";
import { EditContext } from "../../context/EditContext";
import { PostContext } from "../../context/PostContext";
import { Form } from "./Form";

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
    <Form
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      arrayoptions={arrayoptions}
      data={data}
    />
  );
};


