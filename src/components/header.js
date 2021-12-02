import {NavLink} from "react-router-dom";

export default function Header() {
    return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/user">User</NavLink></li>
        <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
        <li><NavLink activeClassName="active" to="/foodplan">Weekly foodplan</NavLink></li>
      </ul>
    </div>
    );
  }