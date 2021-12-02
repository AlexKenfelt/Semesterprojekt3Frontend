<<<<<<< HEAD
function LoginPage() {
    return ( 
        <div>
        <h1>Home</h1>
=======
import LogIn from './Login';

function LoginPage({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  
  return (
    <div>
      <h1>Login Page</h1>
>>>>>>> 95fc9d9cd946cfb3bad20c1265df20f6c58af549
      {!loggedIn ? (
        <LogIn facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} />
      ) : (
        <div>
          <p><button onClick={logout}>Logout</button></p>
          <p>Role: {facade.getUserRoles()}</p>
        </div>
      )}
    </div>
<<<<<<< HEAD
    );
=======
  );
>>>>>>> 95fc9d9cd946cfb3bad20c1265df20f6c58af549
}

export default LoginPage;