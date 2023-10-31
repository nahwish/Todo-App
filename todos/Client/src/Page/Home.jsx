import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Select from "../components/SelectCategory";

export const Home = () => {

  return (
    <>
      <ListHeader listName={"😊 Agregar a la lista"}  />
      <Select />
      <ListItem/>
    </>
  );
};
