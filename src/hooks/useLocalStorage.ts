import { useState } from 'react';

function useLocalStorage<T>(key: string, defaultValue: T) {
  // Get the initial value from localStorage or use the defaultValue
  const storedValue = localStorage.getItem(key);
  const initialValue =
    storedValue !== null ? JSON.parse(storedValue) : defaultValue;

  // Create a state to hold the current value
  const [value, setValue] = useState<T>(initialValue);

  // Function to set the value in localStorage and update the state
  const setLocalStorageItem = (newValue: T): void => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  // Function to remove the value from localStorage and reset the state to the defaultValue
  const removeLocalStorageItem = (): void => {
    localStorage.removeItem(key);
    setValue(defaultValue);
  };

  return {
    value,
    setLocalStorageItem,
    removeLocalStorageItem,
  };
}

export default useLocalStorage;
