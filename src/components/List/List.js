import { ListItem } from "./ListItem";

export function List({ itemList = [], deleteItem, updateItem }) {
  return (
    <div className="List">
      {itemList.map((item) => {
        return (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default List;
