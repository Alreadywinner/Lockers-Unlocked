function setLocalStorageItem<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageItem<T>(key: string, defaultValue: T): T {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
}

function removeLocalStorageItem(key: string): void {
  localStorage.removeItem(key);
}

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };
