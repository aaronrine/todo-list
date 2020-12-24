import { useState } from "react";

export function Form({ handleSubmit }) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name,
          is_done: false,
          id: -1,
        });
        setName("");
      }}
      className="Form"
    >
      <h3>Add a todo here</h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}
export default Form;
