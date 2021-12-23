import React from "react";
import "./App.css";
import List from "./components/List";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WarehouseDetails from "./components/WarehouseDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="details/:id" element={<WarehouseDetails/>}/>
          <Route path="" element={<List/>}/>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
