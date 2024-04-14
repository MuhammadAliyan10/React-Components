import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hour = time.getHours();

  return (
    <>
      <h2>{`${hour}:${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</h2>
    </>
  );
}

export default App;
