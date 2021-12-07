
function Home({facade}) {
  
  return (
    <div>
    <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>

    <div className="home-text">
      <h1>homepage</h1>
      <p>Role: {facade.getUserName()}</p>
    </div>
    </div>

  );
}

export default Home;