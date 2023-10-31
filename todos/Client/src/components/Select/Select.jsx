import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { filterTasksByCategory } from "../../utils/filter";

export const Select = () => {
  const {
    arrayoptions,
    selectedCategory,
    setSelectedCategory,
    setTasks,
    filteredTasks
  } = useContext(FormContext);



  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterTasksByCategory(category, filteredTasks, setTasks);

   
  };

  return (
    <select onChange={handleChange} value={selectedCategory}>
      {arrayoptions &&
        arrayoptions.map((option) => <option key={option}>{option}</option>)}
    </select>
  );
};

