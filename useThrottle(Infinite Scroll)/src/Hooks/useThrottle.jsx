import { useEffect, useRef, useState } from "react";

function useThrottle(value, delay) {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handleTime = setTimeout(() => {
      const now = Date.now();
      const timeExecuted = now - lastExecuted.current;
      if (timeExecuted >= delay) {
        setThrottleValue(value);
        lastExecuted.current = now;
      }
      return () => {
        clearTimeout(handleTime);
      };
    }, delay - (Date.now() - lastExecuted.current));

    return;
  }, [value, delay]);
}
export default useThrottle;
