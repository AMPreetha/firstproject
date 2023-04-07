import {Fragment} from 'react';
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const Meals=()=>{
    return(
        <Fragment>
            <div>
            <MealsSummary/>
            </div>
            <div>
                <AvailableMeals/>
            </div>
        </Fragment>
        


    )
}
export default Meals;