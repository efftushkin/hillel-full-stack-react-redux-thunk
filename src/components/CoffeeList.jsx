import { NavLink, Link } from 'react-router-dom';

function CoffeeList({ drinks, type }) {
  if (!drinks || drinks.length === 0) {
    return (
      <aside className="coffee-list">
        <div className="loading">Loading drinks...</div>
      </aside>
    );
  }

  return (
    <aside className="coffee-list">
      <div className="list-header">
        <Link to="/" className="home-button">
          🏠
        </Link>
        <h2 className="list-title">
          {type === 'hot' ? '☕ Hot Coffee' : '🧊 Iced Coffee'}
        </h2>
      </div>
      <nav className="drinks-nav">
        {drinks.map((drink) => (
          <NavLink
            key={drink.id}
            to={`/coffee/${type}/${drink.id}`}
            className={({ isActive }) => 
              isActive ? 'drink-item active' : 'drink-item'
            }
          >
            <img 
              src={drink.image} 
              alt={drink.title}
              className="drink-thumbnail"
            />
            <span className="drink-name">{drink.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default CoffeeList;
