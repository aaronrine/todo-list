export function ListItem({ item, deleteItem, showUpdateForm }) {
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
    </div>
  );
}

export default ListItem;
