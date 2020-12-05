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
    console.log(data.name, data.is_done);
  }

  function addItem() {}

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
