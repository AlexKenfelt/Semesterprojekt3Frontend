import { useEffect, useState } from "react";

//We need to make a generate random button that fills out our *table?* with data/recipes.

//We need to make a confirm button that saves the recipes to the database, and takes the username and weeknumber as 
//parameters from the URL. And packs the recipes togheter as one big json string.

function FoodPlan({facade, setErrorMessage}) {
    var check = false;
    const[recipes, setRecipes] = useState([]);

    const updateRecipes = (data) => {
        console.log(data)
        setRecipes(data.recipes);
    }

    //Brug ikke functionen før vi får sat en "limited" på
    const handleClick = (facade, setErrorMessage) => {
        
        if (check == false) {
            //facade.fetchData('recipe/weekly', updateRecipes, setErrorMessage);
            check = true
            console.log("check" + check)

             
        }
        const button = document.querySelector('button');

        button.addEventListener('click', event => {
         button.textContent = `Click count: ${event.detail}`;
        
        });

        console.log("check"+ check);
       
    };


    return ( 
        <div>
            <h1>Make your food plan </h1>
            <ul>{recipes.map((r) => <li key={r.id}> {r.title}</li>)}</ul> 
            <button id="button" onClick={handleClick(facade, setErrorMessage)}>Random</button>
        </div>
     );


}

export default FoodPlan;