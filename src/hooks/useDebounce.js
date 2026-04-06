import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce a search query string.
 * @param {string} value The value to debounce.
 * @param {number} delay The debounce delay in milliseconds.
 * @returns {string} The debounced value.
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
