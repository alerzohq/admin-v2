import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value)
console.log(debounceValue, "cool", delay)
  useEffect(() => {
    const handleTimer = setTimeout(() => {

    console.log("hereee")
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handleTimer);
      };
  }, [value, delay])

  return debounceValue
}
