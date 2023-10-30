import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { filterTasksByCategory } from "../../utils/filter";

export const Select = () => {
  const {
    arrayoptions,
    selectedCategory,
    setSelectedCategory,
    setFilteredTasks,
    tasks,
  } = useContext(FormContext);

  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterTasksByCategory(category, setFilteredTasks, tasks);
  };

  return (
    <select onChange={handleChange} value={selectedCategory}>
      {arrayoptions &&
        arrayoptions.map((option) => <option key={option}>{option}</option>)}
    </select>
  );
};
