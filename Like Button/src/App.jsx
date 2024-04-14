import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleLike = async () => {
    try {
      setLoading(true);
      const api = "https://www.greatfrontend.com/api/questions/like-button";
      const resData = await fetch(api, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: like ? "Liked" : "Like",
      });
      if (res.status >= 200 && res.status <= 300) {
        setLike(!like);
      } else {
        const res = await resData.json();
        console.log(res);
        setError(res.body.message);
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleLike}>{like ? "Liked" : "Like"}</button>

        <p>{error && error}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
