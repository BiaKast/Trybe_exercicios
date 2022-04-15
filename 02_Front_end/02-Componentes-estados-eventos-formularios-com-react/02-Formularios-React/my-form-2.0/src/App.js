import React from "react";
import "./App.css";
import FieldsetInput from "./fieldsetInput";
import FieldsetEmprego from "./FieldsetEmprego";

function App() {
  return (
    <form>
      <FieldsetInput />
      <FieldsetEmprego />
      <button type="submit"> Submeter</button>
    </form>
  );
}

export default App;
