import React, { useState } from "react";
function App() {
  const [name, setName] = useState("Parth");
  const [roll, setRoll] = useState(101);
  
  const handleClick = () => {
    setName("Baldaniya");
    setRoll(105);
  };

  return (
    <React.Fragment>
      <h1>Name: {name}</h1>
      <h2>Roll: {roll}</h2>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
}

export default App;
