import { useEffect, useState } from "react";

//We need to make a generate random button that fills out our *table?* with data/recipes.

//We need to make a confirm button that saves the recipes to the database, and takes the username and weeknumber as 
//parameters from the URL. And packs the recipes togheter as one big json string.

function FoodPlan({facade, setErrorMessage}) {

    const[recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const updateRecipes = (data) => {
        console.log(data)
        setRecipes(data.recipes);
        setIsLoading(false)
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log("Hello World!") 
        setIsLoading(false)
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
            <h1 class="foodTitle">Make your food plan </h1>
            
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
                        {recipes.length === 0 ? <><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></>: recipes.map((r) => {
                        return(
                                <td>{r.title}</td>
                          
                        )
                    })}
                    <td class="dinner"> dinner </td> 
                    </tr> 
                </tbody>
                </table>
            </div>
            <button class="random" onClick={handleClick}>Random</button>

            <button class="confirm" onClick={saveData}>Confirm</button>
        </div>
     );


}

export default FoodPlan;