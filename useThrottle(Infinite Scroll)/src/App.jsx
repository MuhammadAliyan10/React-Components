import { useEffect, useState } from "react";
import useThrottle from "./Hooks/useThrottle";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  console.log(Date.now());
  const getWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttleCustomDesign = useThrottle(getWindowSize, 500);
  useEffect(() => {
    window.addEventListener("resize", throttleCustomDesign);
    return () => {
      window.removeEventListener("resize", throttleCustomDesign);
    };
  }, []);

  return (
    <>
      <h2>
        Window size is {windowSize.width} X {windowSize.height}
      </h2>
    </>
  );
}

export default App;
