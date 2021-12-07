import { useState } from "react";
import {NavLink} from "react-router-dom";

export default function LogIn({ facade, setLoggedIn, setErrorMessage })
{
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) =>
    {
        evt.preventDefault();
        facade.login(loginCredentials.username, loginCredentials.password, setLoggedIn, setErrorMessage)
        window.location.href="home"
    }
    
    const onChange = (evt) =>
    {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
        
    }

    return (
        <div>
            <form onChange={onChange} className="login" >
                <h2>login</h2>
                <input style={{textAlign:"center"}} placeholder="username" id="username" />
                <input style={{textAlign:"center"}} placeholder="password" id="password" />
                <button onClick={performLogin}>login</button>
            </form>
        </div>
    )

}