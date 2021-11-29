import { useEffect, useState } from "react";

function FoodPlan({facade, setErrorMessage}) {

    const[recipes, setRecipes] = useState([]);

    const updateRecipes = (data) => {
        setRecipes(data.recipes);
    }

    useEffect(() => {
        facade.fetchData('recipe/weekly', updateRecipes, setErrorMessage);
    }, [facade, setErrorMessage]);

    return ( 
        <div>
            <h1>Make your food plan </h1>
        </div>
     );


}

export default FoodPlan;