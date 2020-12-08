import { useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import { Form } from "../Form/Form";
const data = [
  {
    name: "todo",
    is_done: false,
    id: 1,
  },
  {
    name: "item",
    is_done: true,
    id: 2,
  },
];
export function List() {
  const [itemList, setItemList] = useState(data);
  const [formItem, setFormItem] = useState(null);

  function handleSubmit(data) {
    if (formItem) {
      updateItem(data);
    } else {
      addItem(data);
    }
  }

  function addItem(data) {
    setItemList((oldItemList) => [
      ...oldItemList,
      { ...data, id: oldItemList.length + 1 },
    ]);
  }

  function showUpdateForm(item) {
    console.log(item);
    setFormItem(item);
  }

  function deleteItem(data) {
    console.log(data);
    setItemList((oldItemList) => {
      return oldItemList.filter((item) => {
        return item.id !== data.id;
      });
    });
  }

  function updateItem(updatedItem) {
    setItemList((prevItemList) =>
      prevItemList.map((item) => {
        console.log(item.id, updatedItem.id);

        if (item.id != updatedItem.id) {
          return item;
        }
        return updatedItem;
      })
    );
    setFormItem(null);
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} item={formItem} />
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
