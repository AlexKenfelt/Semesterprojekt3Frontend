import LogIn from './Login';

function LoginPage({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  
  return (
    <div>
      <h1>Login Page</h1>
      {!loggedIn ? (
        <LogIn facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} />
      ) : (
        <div>
          <p><button onClick={logout}>Logout</button></p>
          <p>Role: {facade.getUserRoles()}</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;