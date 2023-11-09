import ListHeader from "../components/ListHeader";
import ListItem from "../components/ListItem";
import Select from "../components/SelectCategory";

export const Home = ({ userEmail }) => {
  return (
    <>
      <p className="user-email">Bienvenido {userEmail}</p>
      <ListHeader listName={"¿Qué necesito?"} />
      <ListItem />
    </>
  );
};
