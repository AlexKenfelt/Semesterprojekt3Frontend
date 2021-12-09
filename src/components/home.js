import { Link } from "react-router-dom"
function Home() {
  
  return (
    <div>
        <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>

        <div className="home-text">
          <h1>homepage</h1>
        </div>

        <div style={{gap: "2px", width:"430px", height: "430px", display: "flex"}}>
            <img src = {require ("../images/lomster.png").default}/>
            <img src = {require ("../images/roasted.png").default}/>
            <img src = {require ("../images/two.png").default}/>
        </div>
    </div>

  );
}

export default Home;