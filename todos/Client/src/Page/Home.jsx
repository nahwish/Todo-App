import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Select from "../components/SelectCategory";

export const Home = ({ userEmail }) => {
  return (
    <>
      <ListHeader listName={"😊 Agregar a la lista"} />
      <p className="user-email">Bienvenido {userEmail}</p>
      <Select />
      <ListItem />
    </>
  );
};
