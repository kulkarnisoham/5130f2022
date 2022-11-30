import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import UserLoginPage from "./pages/UserLoginPage";
import ProfessorAdmin from "./pages/ProfessorAdmin";
import ProfessorProfilePage from "./pages/ProfessorProfilePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<HomePage title="Permission Number System" />}
          ></Route>
          <Route
            path="/user-registration"
            element={<UserRegistrationPage title="PNS Sign up" />}
          />
          <Route
            path="/user-login"
            element={<UserLoginPage title="PNS Login" />}
          ></Route>
          <Route
            path="/profadmin"
            element={<ProfessorAdmin title="Professor Admin" />}
          />
          <Route
            path="/ppp"
            element={<ProfessorProfilePage title="Professor Admin" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
