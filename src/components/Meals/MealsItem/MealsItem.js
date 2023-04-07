import Classes from './MealsItem.module.css';
import MealItemForm from './MealsForm';
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={Classes.list}>
        <h3 className={Classes.meal}>{props.name}</h3>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealsItem;
