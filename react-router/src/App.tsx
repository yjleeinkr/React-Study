import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HistoryAPI from "./components/historyAPI";

function App() {
  return (
    <div className="App">
      <HistoryAPI />
    </div>
  );
}

export default App;
