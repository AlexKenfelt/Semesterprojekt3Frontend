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

    const saveData = (evt) => {
        evt.preventDefault();
        console.log("Saving weekly plan") 
        facade.saveData('recipe/weekly/SuperAwesomeUser/48', updateSaveData, setErrorMessage, recipes);
    }

    const updateSaveData = (data) => {
        console.log(data)
        setErrorMessage(JSON.stringify(data))
    }

    return ( 
        <div>
            <h1>Make your food plan </h1>

            <div>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">monday</th>
                            <th scope="col">tuesday</th>
                            <th scope="col">wednesday</th>
                            <th scope="col">thursday</th>
                            <th scope="col">friday</th>
                            <th scope="col">saturday</th>
                            <th scope="col">sunday</th>
                            <th scope="col">u48</th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                    {recipes.map((r) => {
                        return(
                                <td>{r.title}</td>  
                        )
                    })}
                    </tr>                   
                </tbody>
                </table>
            </div>

            <button onClick={handleClick}>Random</button>

            <button onClick={saveData}>Confirm</button>
        </div>
     );

     
}

export default FoodPlan;