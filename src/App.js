import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import GlobalStyle from "./global";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Cards from "./components/Cards";
import Title from "./components/Title";

import Landing from "./pages/Landing";
import Main from "./pages/Main";

import { auth } from "./services/firebase";


import './App.css';

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));

    // cleanup action - removes observer from memory when not needed  
    return () => unsubscribe(); 

  }, [])

  return (
    <>
    <Header user={user}/>
      <Sidebar />
      <Banner />
      <Title />
      <Main />
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}



export default App;
