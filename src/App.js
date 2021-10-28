import { useState, useEffect } from "react";
import { Route, Swicth, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Main from "./pages/Main";

import { auth } from "./services/firebase";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

    </div>
  );
}



export default App;
