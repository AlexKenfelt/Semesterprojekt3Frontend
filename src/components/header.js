import {NavLink, Link} from "react-router-dom";


export default function Header({ logout, facade }) {
    return (
      //<a> tags needs to be Navlink tags inorder to works fx set change profile once it is made. 
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand mb-0 h2" to = "/home">home</Link>
        <Link class="navbar-brand" to="/foodplan">weekly planner<span class="sr-only">(current)</span></Link>
        <Link class="navbar-brand" to="/groceries">groceries<span class="sr-only">(current)</span></Link>
        <button class="btn btn-link navbar-brand" style={{outline: "none"}} onClick={logout}>logout</button>
        <p class="navbar-brand">Role: {facade.getUserName()}</p>


        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>

        
    </nav>
    </div>
    );


/*
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/user">User</NavLink></li>
        <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
        <li><NavLink activeClassName="active" to="/foodplan">Weekly foodplan</NavLink></li>
      </ul>
*/
  }