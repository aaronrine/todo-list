import { useState } from "react";
import {ListItem} from "../ListItem/ListItem"
export function List() {
  const [itemList, setitemList] = useState([]);
  return itemList.map((item) => {
    return (
      <div>
        <ListItem item={item} />
      </div>
    );
  });
}

export default List;
