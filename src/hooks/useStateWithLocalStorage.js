import { useState, useEffect } from "react";

export function useStateWithLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStateWithLocalStorage;
