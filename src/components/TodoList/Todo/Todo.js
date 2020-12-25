import { data } from "../../../assets/data";
import Form from "./Form/Form";
import List from "./List/List";
import useStateWithLocalStorage from "../../../hooks/useStateWithLocalStorage";

import "./Todo.scss";

export function Todo() {
  const [itemList, setItemList] = useStateWithLocalStorage("itemList", data);

  function addItem(data) {
    setItemList((oldItemList) => [
      ...oldItemList,
      { ...data, id: oldItemList.length + 1 },
    ]);
  }

  function deleteItem(data) {
    setItemList((oldItemList) => {
      return oldItemList.filter((item) => {
        return item.id !== data.id;
      });
    });
  }

  function handleSubmit(data) {
    addItem(data);
  }

  function updateItem(updatedItem) {
    setItemList((prevItemList) =>
      prevItemList.map((item) => {
        if (item.id !== updatedItem.id) {
          return item;
        }
        return updatedItem;
      })
    );
  }

  return (
    <div className="Todo">
      <Form handleSubmit={handleSubmit} />
      <List
        itemList={itemList}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
}
export default Todo;
