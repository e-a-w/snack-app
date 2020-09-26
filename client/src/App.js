import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navaigation from "./components/Navaigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Navaigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/account" component={Account} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
