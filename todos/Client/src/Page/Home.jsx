import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Select from "../components/SelectCategory";

export const Home = ({ userEmail }) => {
  return (
    <>
      <ListHeader listName={"¿Qué Necesito?"} />
      <p className="user-email">Bienvenido {userEmail}</p>
      <ListItem />
    </>
  );
};
