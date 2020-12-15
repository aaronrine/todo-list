import { useState } from "react";
import "./ListItem.css";

export function ListItem({ item, deleteItem, showUpdateForm }) {
  const [is_done, setIs_done] = useState(item.is_done);

  return (
    <div className="ListItem">
      <div className="name">
        <p>{item.name}</p>
      </div>
      <div className="controls">
        <input
          type="checkbox"
          value="done"
          checked={is_done}
          onChange={() => setIs_done((prev) => !prev)}
        />
        <button
          className="edit"
          type="button"
          onClick={() => {
            showUpdateForm(item);
          }}
        >
          Edit
        </button>
        <button
          className="delete"
          type="button"
          onClick={() => {
            deleteItem(item);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
