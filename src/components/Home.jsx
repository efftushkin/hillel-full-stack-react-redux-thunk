import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Coffee Recipe Browser</h1>
      <p className="home-subtitle">Choose your coffee style</p>
      
      <div className="coffee-type-cards">
        <Link to="/coffee/hot" className="coffee-card hot-coffee">
          <div className="card-icon">☕</div>
          <h2>Hot Coffee</h2>
          <p>Explore warm and comforting coffee recipes</p>
        </Link>
        
        <Link to="/coffee/iced" className="coffee-card cold-coffee">
          <div className="card-icon">🧊</div>
          <h2>Iced Coffee</h2>
          <p>Discover refreshing cold coffee drinks</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
