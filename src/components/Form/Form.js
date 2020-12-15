import { useState, useEffect } from "react";
import "./Form.css";

export function Form({ handleSubmit, item }) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(item ? item.name : "");
  }, [item]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name,
          is_done: item ? item.is_done : false,
          id: item ? item.id : -1,
        });
        setName("");
      }}
    >
      <h3>Add a todo here</h3>
      <button type="submit">Add</button>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
    </form>
  );
}
export default Form;
