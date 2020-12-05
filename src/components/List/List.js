import { useState } from "react";

export function List() {
  const listItemsData = [
    {
      name: "finish essay",
      is_done: false,
    },
    {
      name: "take out garbage",
      is_done: true,
    },
    {
      name: "plan out wedding",
      is_done: false,
    },
    {
      name: "meet the Robinson's",
      is_done: false,
    },
    {
      name: "extract oil from mars",
      is_done: true,
    },
    {
      name: "eat ice cream",
      is_done: false,
    },
  ];
  const [itemList, setitemList] = useState(listItemsData);
  return itemList.map((item) => {
    return (
      <div>
        <span>{item.name}</span>
        <span> {item.is_done}</span>
      </div>
    );
  });
}

export default List;
