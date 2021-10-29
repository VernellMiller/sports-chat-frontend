import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import Landing from "./pages/Landing";
import Main from "./pages/Main";

import { auth } from "./services/firebase";


import './App.css';

function App() {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="landing">
          <Landing />
        </Route>
      </Switch>
    <Footer />
    {/* <Banner /> */}
    </>
  );
}



export default App;
