import { useEffect, useState } from "react";
import { useContext } from "react";
import { FormContext } from "./context/FormContext";
import { GetContext } from "./context/GetContext";
import { DeleteContext } from "./context/DeleteContext";
import { filterTasksByCategory } from "./utils/filter";
import Home from "./Page";
// import { fetchApiData, deleteApiData } from "./services/Api";

const App = () => {
  const userMail = "chawi@test.com";
  // const [tasks, setTasks] = useState(null);

  const { selectedCategory, setFilteredTasks, tasks } =
    useContext(FormContext);
  const { getData } = useContext(GetContext);
  const { deleteItem } = useContext(DeleteContext);

  // const getData = async () => {
  //   try {
  //     const response = await fetchApiData(userMail);
  //     setTasks(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const deleteItem = async (id) => {
  //   try {
  //     const response = await deleteApiData(id);
  //     if (response.status === 200) {
  //       getData();
  //       filterTasksByCategory("Todo", setFilteredTasks, tasks);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getData();
    filterTasksByCategory(selectedCategory, setFilteredTasks, tasks);
  }, [selectedCategory]);

  return (
    <div className="app">
      <Home getData={getData} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
