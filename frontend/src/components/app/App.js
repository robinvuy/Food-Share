import './App.css';
import LoginForm from "../login/LoginForm";
import SignUpForm from "../Collector/SignUpForm";
import DonatorSignUpForm from '../Donator/SignUpForm';
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/signupcollector" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/signupdonator" element={<DonatorSignUpForm navigate={useNavigate()} />} />
    </Routes>
  );
};


export default App;