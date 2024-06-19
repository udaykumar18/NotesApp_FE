import React, { useContext, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { toggle } = useContext(ThemeContext);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [toggle]);
  return (
    <div className="App dark:bg-[#1b1b1f]">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
