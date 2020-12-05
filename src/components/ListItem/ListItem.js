export function ListItem({ item, deleteItem }) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.is_done}</p>
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
