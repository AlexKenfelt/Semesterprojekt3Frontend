import { useState } from "react";

function Admin({facade, setErrorMessage}) {

    const [users, setUsers] = useState([]);


    const loadUsers = (evt) => {
        evt.preventDefault();

        facade.fetchData('recipe/admin', updateUsers, setErrorMessage);
    }

    const updateUsers = (data) => {
        console.log(data)
        setUsers(data.users);
    }

    return ( 
        <div>
             <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>
        
        <div>
            <h1>Active Users</h1>
            <ul>{users.map((user) => <li>{user.userName}</li>)}</ul>
            <button onClick={loadUsers}>get users</button>
        </div>
        </div>
     );
}

export default Admin;