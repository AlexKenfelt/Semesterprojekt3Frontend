import {NavLink} from "react-router-dom";

export default function Header() {
    return (
      
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bootstrap
  </a>
    <form class="form-inline  ">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

    </form>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="mr-auto"></div>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home<span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink class="nav-link" to="/foodplan">Weekly Meal Plan<span class="sr-only">(current)</span></NavLink>
      </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
          <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="navbarDropdown">
            <h6 class="dropdown-header">Dropdown header</h6>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
          </div>

        </li>

      </ul>

      </div>
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