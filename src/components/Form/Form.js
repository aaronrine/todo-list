import { useState } from "react";
export function Form({ handleSubmit }) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, is_done: false });
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
