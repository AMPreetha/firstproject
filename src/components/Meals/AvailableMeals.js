import MealsItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";
import Classes from './AvailableMeals.module.css'
    const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'French Fries',
    description: 'Potato fries',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Fried rice',
    description: 'North Indian food',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={Classes.meals} >
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


