import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Navaigation from "./components/Navaigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RecipePage from "./pages/RecipePage";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import SecureRoute from "./routes/SecureRoute";
import GuestRoute from "./routes/GuestRoute";

function App() {
  return (
    <AppContextProvider>
      <span className="app">
        <Router>
          <Navaigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipe/:id" component={RecipePage} />
            <GuestRoute exact path="/login" component={Login} />
            <GuestRoute exact path="/signup" component={SignUp} />
            <SecureRoute exact path="/account" component={Account} />
          </Switch>
        </Router>
      </span>
    </AppContextProvider>
  );
}

export default App;
