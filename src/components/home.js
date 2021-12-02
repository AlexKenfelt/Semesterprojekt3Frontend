import React, { useEffect, useState } from "react";
import LogIn from './Login';

function Home({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  
  return (
   
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
    </div>

  );
}

export default Home;