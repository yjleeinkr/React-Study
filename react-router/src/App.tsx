import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HistoryAPI from "./components/HistoryAPI";
import Router from "./router/Router";
import Route from "./router/Route";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Router>
      <HistoryAPI />
    </div>
  );
}

export default App;
