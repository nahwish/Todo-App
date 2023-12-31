import { useContext,useState } from "react";
import { useCookies } from "react-cookie";

import { FormContext } from "../../context/FormContext";
import { EditContext } from "../../context/EditContext";
import { PostContext } from "../../context/PostContext";
import { Form } from "./Form";

export const FormContainer = ({ isCreating, task, setShowModalForEdit }) => {
  /* AUTH */
  const [cookies,setCookie,removeCookie ] = useCookies(null);
  /* CONTEXT */
  const { postData } = useContext(PostContext);
  const { editData } = useContext(EditContext);
  const { arrayoptions } = useContext(FormContext);
  /* STATE */
  const [data, setData] = useState({
    user_email: !isCreating ? task?.user_email : cookies.Email,
    title: !isCreating ? task?.title : "",
    progress: !isCreating ? task?.progress : false,
    description: !isCreating ? task?.description : "",
    category: !isCreating ? task?.category : "",
    date: !isCreating ? task?.date : new Date(),
  });
  /* CHNAGE INPUT */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreating) {
      postData(data, data.user_email);
    } else {
      editData(task, data, data.user_email);
    }
    setShowModalForEdit(false);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      arrayoptions={arrayoptions}
      data={data}
      isCreating={isCreating}
    />
  );
};


