import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Navaigation from "./components/Navaigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RecipePage from "./pages/RecipePage";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import About from "./pages/About";
import Footer from "./components/Footer";
import SecureRoute from "./routes/SecureRoute";
import GuestRoute from "./routes/GuestRoute";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <span className="app">
          <Navaigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchResults} />
            <Route exact path="/about" component={About} />
            <Route exact path="/recipe/:id" component={RecipePage} />
            <Route path="/recipe">
              <h1 className="text-center mt-5">Try seaching for a recipe!</h1>
            </Route>
            <GuestRoute exact path="/login" component={Login} />
            <GuestRoute exact path="/signup" component={SignUp} />
            <SecureRoute exact path="/account" component={Account} />
            <Route path="/">
              <h1 className="text-center mt-5">Sorry, page not found.</h1>
            </Route>
          </Switch>
        </span>
        <Footer />
      </Router>
    </AppContextProvider>
  );
}

export default App;
