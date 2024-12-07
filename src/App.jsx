import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Home/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Rute ke Dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
