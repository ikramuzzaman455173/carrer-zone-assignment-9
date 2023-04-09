import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* ====NavBar===== */}
      <NavBar />
      <Outlet/>
      {/* ====Footer===== */}

    </>
  );
}

export default App;