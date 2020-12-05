import { useState } from "react";
import { ListItem } from "../ListItem/ListItem";
import { Form } from "../Form/Form";
const data = [
  {
    name: "todo",
    is_done: false,
  },
  {
    name: "item",
    is_done: true,
  },
];
export function List() {
  const [itemList, setItemList] = useState(data);

  function handleSubmit(data) {
    addItem(data);
  }

  function addItem(data) {
    setItemList((oldItemList) => [...oldItemList, data]);
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      {itemList.map((item) => {
        return <ListItem item={item} key={item.name} />;
      })}
    </div>
  );
}

export default List;
