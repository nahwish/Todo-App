import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { filterTasksByCategory } from "../../utils/filter";
import FilterIcon from "../Icons/FilterIcon";

export const SelectCategory = () => {
  const {
    arrayoptions,
    selectedCategory,
    setSelectedCategory,
    setTasks,
    filteredTasks,
  } = useContext(FormContext);

  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterTasksByCategory(category, filteredTasks, setTasks);
  };

  return (
    <div className="selec-container">
    <select onChange={handleChange} value={selectedCategory}>
      {arrayoptions &&
        arrayoptions.map((option) => <option key={option}>{option}</option>)}
    </select>
        <FilterIcon/>
    </div>
  );
};

