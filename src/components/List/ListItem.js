import { useState } from "react";

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
        <div className="buttons">
          <button
            className="edit"
            type="button"
            onClick={() => {
              showUpdateForm(item);
            }}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="delete"
            type="button"
            onClick={() => {
              deleteItem(item);
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
