import { useLayoutEffect, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useLayoutEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(JSON.parse(item) ?? initialValue);
    } catch (error) {
      console.error('Error at hook useLocalStorage:', error);
      setStoredValue(initialValue);
    }
  }, []);

  const setValue = (valueToStore) => {
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      console.log('Setting value to localStorage:', valueToStore);
    } catch (error) {
      console.error('Error at hook useLocalStorage:', error);
    }
  };

  return [storedValue, setValue];
}
