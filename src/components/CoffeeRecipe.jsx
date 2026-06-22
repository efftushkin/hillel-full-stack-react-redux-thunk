import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCoffeeByType } from '../store/coffeeSlice';

function CoffeeRecipe() {
  const { id, type } = useParams();
  const { drinks, status } = useSelector((state) => selectCoffeeByType(state, type));

  // If no drinks loaded yet, show loading
  if (status === 'idle' || status === 'loading') {
    return (
      <article className="recipe-detail">
        <div className="loading">Loading recipe...</div>
      </article>
    );
  }

  if (!drinks || drinks.length === 0) {
    return (
      <article className="recipe-detail">
        <div className="error">Recipe not found</div>
      </article>
    );
  }

  // If no id specified, redirect to first drink
  if (!id) {
    return <Navigate to={`/coffee/${type}/${drinks[0].id}`} replace />;
  }

  // Find selected drink
  const selectedDrink = drinks.find((d) => d.id === Number(id));

  if (!selectedDrink) {
    return (
      <article className="recipe-detail">
        <div className="error">Recipe not found</div>
      </article>
    );
  }

  return (
    <article className="recipe-detail">
      <h1 className="recipe-title">{selectedDrink.title}</h1>
      
      <img 
        src={selectedDrink.image} 
        alt={selectedDrink.title}
        className="recipe-image"
      />
      
      <section className="recipe-section">
        <h2>Description</h2>
        <p className="recipe-description">{selectedDrink.description}</p>
      </section>
      
      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {selectedDrink.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default CoffeeRecipe;
