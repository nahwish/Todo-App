import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Select from "../components/Select";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";


/**
 * Main component for displaying a list of tasks and managing form-related actions.
 * @param {Object} props - The component's props.
 * @param {Function} props.getData - Function to fetch data.
 * @param {Function} props.deleteItem - Function to delete a task.
 * @returns {JSX.Element} The Home component.
 */

export const Home = (props) => {
  const { getData, deleteItem } = props;
  const { filteredTasks } = useContext(FormContext);

  return (
    <>
      <ListHeader listName={"😊 Agregar a la lista"} getData={getData} />
      <Select />
      {filteredTasks?.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          getData={getData}
          deleteItem={deleteItem}
        />
      ))}
    </>
  );
};
