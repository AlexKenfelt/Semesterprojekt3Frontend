import { useEffect, useState } from "react";

//We need to make a generate random button that fills out our *table?* with data/recipes.

//We need to make a confirm button that saves the recipes to the database, and takes the username and weeknumber as 
//parameters from the URL. And packs the recipes togheter as one big json string.

function FoodPlan({facade, setErrorMessage}) {

    const[recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[weeknumber, setWeekNumber] = useState(1);
    console.log(weeknumber)

    useEffect((evt) => {
        evt.preventDefault();
        //This is just the calculations for the week number, used in our fetch and is being displayed in the table.
        var currentdate = new Date();
        var oneJan = new Date(currentdate.getFullYear(),0,1);
        var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        setWeekNumber(Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7));

        //This is the fetch for our table so if the used already have a meal plan saved we will make sure to display that.
        //...
        facade.fetchData('Placeholder', updateRecipes, setErrorMessage);
    })

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
        facade.saveData('recipe/weekly/' + facade.getUserName() + '/' + weeknumber, updateSaveData, setErrorMessage, recipes);
    }

    const updateSaveData = (data) => {
        console.log(data)
        setErrorMessage(JSON.stringify(data))
    }

    return ( 
        <div>
        <div className = "bg-image">
          <img height="100%" width="100%" src = {require ("../images/Background.png").default}/>
        </div>

            <h1 style={{textAlign: "center", fontSize: "xx-large"}} class="foodTitle">make your food plan</h1>
            
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
                            <th scope="col">week - {weeknumber}</th>
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
            <div className="button-foodplan">
                <button onClick={handleClick}>random</button>
                <button onClick={saveData}>confirm</button>
            </div>
        </div>
     );


}

export default FoodPlan;