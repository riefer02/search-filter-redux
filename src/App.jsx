import React, { useState } from "react";
import SearchApp from "./components/SearchApp.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container bg-red-100 h-screen mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className=" bg-gray-300">
            <SearchApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
