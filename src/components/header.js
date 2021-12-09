import {NavLink, Link, useHistory} from "react-router-dom";


export default function Header({ logout, facade, loggedIn }) {

  const history = useHistory();

  const performLogout = (evt) =>
  {
      evt.preventDefault();
      logout()
      history.push("/");
  }


    return (
      //<a> tags needs to be Navlink tags inorder to works fx set change profile once it is made. 
    <div>
<<<<<<< HEAD
       {facade.hasUserAccess('user', loggedIn) && (
=======
      
>>>>>>> maja
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          <Link class="navbar-brand h2" to = "/home">home</Link>
          <Link class="navbar-brand" to="/foodplan">weekly planner<span class="sr-only">(current)</span></Link>
          <Link class="navbar-brand" to="/groceries">groceries<span class="sr-only">(current)</span></Link> 
        </div>       
        
        
          <p class="navbar-brand">name: {facade.getUserName()}</p>
      

        <div style={{display:"flex"}}>
        <form class="form-inline">
           <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search"/>
        </form>

        <button class="navbar-brand btn btn-link" style={{outline: "none"}} onClick={performLogout}>logout</button>
        </div>
        
    </nav>
       )}
    </div>
    );
  }