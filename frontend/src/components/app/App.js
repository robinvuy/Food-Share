import './App.css';
import LoginCollector from "../Collector/LoginCollector";
import LoginDonator from "../Donator/LoginDonator";
import SignUpForm from "../Collector/SignUpForm";
import DonatorSignUpForm from '../Donator/SignUpForm';
import DonatorFeed from '../donatorfeed/DonatorFeed';
import CollectorFeed from '../collectorFeed/CollectorFeed';
import DonatorAccount from '../DonatorAccountPage/DonatorAccount';
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/signup/collector" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/signup/donator" element={<DonatorSignUpForm navigate={useNavigate()} />} />
      <Route path="/login/collector" element={<LoginCollector navigate={useNavigate()} />} />
      <Route path="/login/donator" element={<LoginDonator navigate={useNavigate()} />} />
      <Route path="/foodhero/:id" element={<DonatorFeed navigate={useNavigate()} />} />
      <Route path="/foodrescuer/:id" element={<CollectorFeed navigate={useNavigate()} />} />
      <Route path="/foodhero/account/:id" element={<DonatorAccount navigate={useNavigate()} />} />
    </Routes>
  );
};


export default App;