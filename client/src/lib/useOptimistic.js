// useOptimistic.js
import { useState } from 'react';

export function useOptimistic(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  function confirm() {
    setValue(true);
  }
  
  function cancel() {
    setValue(false);
  }
  
  return { value, confirm, cancel };
}
