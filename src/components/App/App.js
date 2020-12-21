import { useState } from "react";

import { data } from "../../assets/data";
import Form from "../Form/Form";
import List from "../List/List";
import useStateWithLocalStorage from "../../hooks/useStateWithLocalStorage";

import "./App.scss";

export function App() {
  const [formItem, setFormItem] = useState(null);
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
    if (formItem) {
      updateItem(data);
    } else {
      addItem(data);
    }
  }

  function showUpdateForm(item) {
    setFormItem(item);
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
