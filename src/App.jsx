import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainComponent from "./components/Home/Hero";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import RegisterForm from "./components/Register";
import Contact from "./components/ContactUs";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Register">
            <RegisterForm />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
