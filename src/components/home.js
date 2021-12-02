import React, { useEffect, useState } from "react";
import LogIn from './Login';

function Home() {
  
  return (
<<<<<<< HEAD
   
    <div class=".container">
      <div class="login">
      {!loggedIn ? (
        <LogIn facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} />
      ) : (
        <div>
          <p><button onClick={logout}>Logout</button></p>
          <p>Role: {facade.getUserRoles()}</p>
        </div>
      )}
      </div>

      <img src="Background.png" class="background-image"/>
=======
    <div>
      <h1>Yo Yo Yo, Welcome to this awesome homepage</h1>
>>>>>>> 95fc9d9cd946cfb3bad20c1265df20f6c58af549
    </div>

  );
}

export default Home;