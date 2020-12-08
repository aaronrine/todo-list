import { useState, useEffect } from "react";
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
      <button type="submit">Submit</button>
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
