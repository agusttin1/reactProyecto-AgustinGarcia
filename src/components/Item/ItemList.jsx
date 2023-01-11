import { Comic } from "./Item";
import Loader from "../Loader/Loader";
import { ContMainCards } from "../../styles/components/ItemListContainer.Elements";


export const ItemList = ({ items }) => {
  return (
    <ContMainCards>
      {items.length > 0 ? (
        items.map((item) => <Comic key={item.id} {...item} />)
      ) : (
        <Loader />
      )}
    </ContMainCards>
  );
};
