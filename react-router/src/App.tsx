import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Router from "./router/Router";
import Route from "./router/Route";
import Main from "./components/Main";
import About from "./components/About";
import HistoryAPI from "./components/HistoryAPI";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/historyAPI" element={<HistoryAPI />} />
      </Router>
    </div>
  );
}

export default App;
