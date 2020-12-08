import { useState } from "react";
export function ListItem({ item, deleteItem, showUpdateForm }) {
  const [is_done, setIs_done] = useState(item.is_done);

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.is_done}</p>
      <p>{item.id}</p>
      <button
        type="button"
        onClick={() => {
          showUpdateForm(item);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => {
          deleteItem(item);
        }}
      >
        Delete
      </button>
      <input
        type="checkbox"
        value="done"
        checked={is_done}
        onChange={() => setIs_done((prev) => !prev)}
      />
    </div>
  );
}

export default ListItem;
