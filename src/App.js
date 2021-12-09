import React, { useState,useEffect } from "react"
import facade from "./facades/apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./components/Login";
import Home from './components/home';
import Header from './components/header';
import User from "./components/user";
import Admin from "./components/Admin";
import FoodPlan from "./components/FoodPlan";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import Groceries from "./components/Groceries";
import Frontpage from "./components/Frontpage";
import Signup from "./components/Signup";


 

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('All is good ... so far');

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('Logged out.')
  };


  return (
    <div>
  <Header facade={facade} loggedIn={loggedIn} logout={logout} />
  <Switch>

  <Route exact path="/">
    <Frontpage/>
    </Route>

  <Route exact path="/login">
    <LoginPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
            />
    </Route>

    <Route exact path="/home">
    {facade.hasUserAccess('user', loggedIn) && 
    <Home/>}
    </Route>

    <Route exact path="/user">
    {facade.hasUserAccess('user', loggedIn) && 
              <User facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>


    <Route exact path="/admin">
              <Admin facade={facade} setErrorMessage={setErrorMessage} />
    </Route>

    <Route exact path="/foodplan">
    {facade.hasUserAccess('user', loggedIn) && 
              <FoodPlan facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/profile">
    {facade.hasUserAccess('user', loggedIn) && 
              <Profile facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/groceries">
    {facade.hasUserAccess('user', loggedIn) && 
              <Groceries facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/signup">
              <Signup facade={facade} setErrorMessage={setErrorMessage} />
    </Route>
  </Switch>
    </div>
  );
 
}
export default App;