import React, { useEffect } from "react";

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
      <div className='text-center font-bold text-blue-400 text-5xl mt-10'>This Is Our About Page 😃</div>
    </>
  );
}

export default App;