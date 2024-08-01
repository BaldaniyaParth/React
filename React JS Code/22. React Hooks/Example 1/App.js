import React, { useState } from "react";
function App() {
  const nameStateVariable = useState("Parth");
  const handleClick = () => {
    nameStateVariable[1]("Baldaniya");
  };
  return (
    <React.Fragment>
      <h1>{nameStateVariable[0]}</h1>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
}
export default App;
