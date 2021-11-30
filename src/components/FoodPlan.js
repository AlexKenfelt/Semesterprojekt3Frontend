import { useEffect, useState } from "react";

//We need to make a generate random button that fills out our *table?* with data/recipes.

//We need to make a confirm button that saves the recipes to the database, and takes the username and weeknumber as 
//parameters from the URL. And packs the recipes togheter as one big json string.

function FoodPlan({facade, setErrorMessage}) {

    const[recipes, setRecipes] = useState([]);

    const updateRecipes = (data) => {
        console.log(data)
        setRecipes(data.recipes);
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log("Hello World!") 
        facade.fetchData('recipe/weekly', updateRecipes, setErrorMessage);
    };


    return ( 
        <div>
            <h1>Make your food plan </h1>
            <ul>{recipes.map((r) => <li key={r.id}> {r.title}</li>)}</ul> 
            <button onClick={handleClick}>Random</button>
        </div>
     );


}

export default FoodPlan;