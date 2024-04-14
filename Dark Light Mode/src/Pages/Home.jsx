import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
