export function ListItem(item) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.is_done}</p>
    </div>
  );
}

export default ListItem;
