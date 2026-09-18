import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce values (prevents excessive re-renders/logic during typing)
 */
export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup timeout if value changes before the delay ends
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}