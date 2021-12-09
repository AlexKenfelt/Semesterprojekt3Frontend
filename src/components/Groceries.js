import { useState, useEffect } from "react";

function Groceries({ facade, setErrorMessage }) {

  const [ingredients, setIngredients] = useState([]);
  const[weeknumber, setWeekNumber] = useState(1);

  useEffect(()=>{
        //This is just the calculations for the week number, used in our fetch and is being displayed in the table.
        var currentdate = new Date();
        var oneJan = new Date(currentdate.getFullYear(),0,1);
        var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        setWeekNumber(Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7));
    
        //This is the section for our fetch of the groceries.
        //facade.fetchData('recipe/foodplan/' + facade.getUserName() + '/' + weeknumber, updateIngredients, setErrorMessage);
  }, []);

  const loadFoodPlan = (evt) => {
    evt.preventDefault();
    facade.fetchData('recipe/foodplan/' + facade.getUserName() + '/' + weeknumber, updateIngredients, setErrorMessage); 
}
  
  const updateIngredients = (data) => {
    console.log(data)
    console.log(data.extendedIngredients + "data.extendedIngredients")

    setIngredients(data);
}
return (
  <div>
     <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>
  <div class="ei">
    {ingredients.map((recipe, index) => (
      <div key={index}>
        <h4>{recipe.title}</h4>

        {/* loop */}
        <div>
          {recipe.extendedIngredients.map((extendedIngredients, i) => (
            <p key={i}>
              {extendedIngredients.originalString}
            </p>
          ))}
        </div>
      </div>
    ))}
    <button onClick={loadFoodPlan}>load Groceries</button>
  </div>
  </div>
  
);
}
  
  export default Groceries;