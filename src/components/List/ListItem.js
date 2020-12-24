import { useState } from "react";

function ListItemEditForm({ item, handleUpdateSubmit }) {
  const [name, setName] = useState(item.name);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateSubmit({
          ...item,
          name,
        });
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit">edit</button>
    </form>
  );
}

export function ListItem({ item, deleteItem, updateItem }) {
  const [is_done, setIs_done] = useState(item.is_done);
  const [showForm, setShowForm] = useState(false);

  function showUpdateForm() {
    setShowForm(true);
  }

  function handleUpdateSubmit(item) {
    updateItem(item);
    setShowForm(false);
  }
  return (
    <div className="ListItem">
      {showForm ? (
        <ListItemEditForm item={item} handleUpdateSubmit={handleUpdateSubmit} />
      ) : (
        <div className="name">
          <p>{item.name}</p>
        </div>
      )}
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
              showUpdateForm();
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
