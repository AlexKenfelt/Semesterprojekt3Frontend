import React, { useState,useEffect } from "react"
import facade from "./facades/apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./components/Login";
import Home from './components/home';
import Header from './components/header';
import User from "./components/user";
import Admin from "./components/admin";
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
    <Home facade={facade}/>
    </Route>
    <Route exact path="/user">
    {facade.hasUserAccess('user', loggedIn) && 
              <User facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>
    <Route exact path="/admin">
    {facade.hasUserAccess('admin', loggedIn) && 
              <Admin facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>
    <Route exact path="/foodplan">
              <FoodPlan facade={facade} setErrorMessage={setErrorMessage} />
    </Route>
    <Route exact path="/profile">
              <Profile facade={facade} setErrorMessage={setErrorMessage} />
    </Route>
    <Route exact path="/groceries">
              <Groceries facade={facade} setErrorMessage={setErrorMessage} />
    </Route>
    <Route exact path="/signup">
              <Signup facade={facade} setErrorMessage={setErrorMessage} />
    </Route>
  </Switch>
    </div>
  );
 
}
export default App;

/* <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
*/