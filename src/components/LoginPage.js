import LogIn from './Login';

function LoginPage({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  
  return (
    <div className="container">
        
        <div className = "bg-image">
          <img src = {require ("../images/Background.png").default}/>
        </div>

    <div className = "login">

      {!loggedIn ? (
        <LogIn facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} />
      ) : (
        <div>
          <p><button onClick={logout}>Logout</button></p>
          <p>Role: {facade.getUserRoles()}</p>
        </div>
      )}
      </div>

        
    </div>

  );
}

export default LoginPage;