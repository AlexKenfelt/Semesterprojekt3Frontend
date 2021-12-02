function LoginPage() {
    return ( 
        <div>
        <h1>Home</h1>
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