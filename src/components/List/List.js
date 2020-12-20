import { ListItem } from "./ListItem";

export function List({ itemList = [], deleteItem, showUpdateForm }) {
  

  return (
    <div className="List">
      {itemList.map((item) => {
        return (
          <ListItem
            item={item}
            deleteItem={deleteItem}
            showUpdateForm={showUpdateForm}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default List;
