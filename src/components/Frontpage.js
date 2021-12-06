import LoginPage from "./LoginPage";
import {NavLink} from "react-router-dom";

function Frontpage() {
    return ( 
    <div>
        <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>


        <div className="frontpage">
            <p className="text-frontpage" style={{backgroundColor:"white",border: "solid", width: "500px", textAlign: "center", height:"50px", fontSize:"30px"}}>weekly food planner</p>
            <div style={{display:"flex", gap:"100px"}}>
            <NavLink to = "/login"><p><button style={{width:"200px", backgroundColor:"white"}} onClick={LoginPage}>login</button></p></NavLink>
            <p><button style={{width:"200px", backgroundColor:"white"}} onClick={LoginPage}>signup</button></p>
            </div>
        </div>


    </div>

     );
}

export default Frontpage;