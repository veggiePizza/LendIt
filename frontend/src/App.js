import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginFormModal from "./components/LoginFormModal";
import SignupFormModal from "./components/SignupFormModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginFormModal} />
          <Route path="/signup" component={SignupFormModal} />
        </Switch>
      )}
    </>
  );
}

export default App;
