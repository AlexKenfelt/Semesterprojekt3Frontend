import LogIn from './Login';


function LoginPage({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  
  return (
<div>
        
        <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>

    <div>
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