import { useState } from "react";
import facade from "../facades/apiFacade";

function Groceries() {

  const [ingredients, setIngredients] = useState([]);
  const[weeknumber, setWeekNumber] = useState(1);

  useEffect(() => {
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    setWeekNumber(Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7));
    facade.fetchData('grocerylist/' + facade.getUserName() + '/' + weeknumber, updateIngredients, setErrorMessage);
  })
  
  const updateIngredients = (data) => {
    console.log(data)
    setIngredients(data.ingredients);
    setIsLoading(false)
}

  

  
    return (
      <div>
        <h1>Your Grocery List</h1>
      </div>
    );
  }
  
  export default Groceries;