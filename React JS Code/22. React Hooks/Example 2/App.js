import React, { useState } from "react";
function App() {
  const [name, setName] = useState("Parth");
  // const name = nameStateVariable[0];
  // const setName = nameStateVariable[1];
  const handleClick = () => {
    setName("Baldaniya");
  };
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
}
export default App;
