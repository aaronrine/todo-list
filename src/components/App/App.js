import { useState } from "react";
import List from "../List/List";
import Form from "../Form/Form";
import "./App.scss";

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
  {
    name: "the quick brown fox jumped over the lazy dog",
    is_done: true,
    id: 3,
  },
];

export function App() {
  const [formItem, setFormItem] = useState(null);
  const [itemList, setItemList] = useState(data);
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

  function updateItem(updatedItem) {
    setItemList((prevItemList) =>
      prevItemList.map((item) => {
        console.log(item.id, updatedItem.id);

        if (item.id !== updatedItem.id) {
          return item;
        }
        return updatedItem;
      })
    );
    setFormItem(null);
  }

  function deleteItem(data) {
    setItemList((oldItemList) => {
      return oldItemList.filter((item) => {
        return item.id !== data.id;
      });
    });
  }
  function showUpdateForm(item) {
    setFormItem(item);
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} item={formItem} />
      <List
        itemList={itemList}
        deleteItem={deleteItem}
        showUpdateForm={showUpdateForm}
      />
    </div>
  );
}
export default App;
