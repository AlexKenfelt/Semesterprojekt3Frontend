import LogIn from './Login';

function LoginPage({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  
  return (
<<<<<<< HEAD
    <div className="container">
        
        <div className = "bg-image">
          <img src = {require ("../images/Background.png").default}/>
        </div>

    <div className = "login">

=======
    <div>
      <h1>Login Page</h1>
>>>>>>> 4a67d72750d82dbfe8057ab060344a73f6baa85f
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
<<<<<<< HEAD

=======
>>>>>>> 4a67d72750d82dbfe8057ab060344a73f6baa85f
  );
}

export default LoginPage;