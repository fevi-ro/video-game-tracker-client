import { NavLink } from "react-router-dom";
import './Homepage.css';



function HomePage() {
    return (
      <main className="homepage">
        
        <article><h1>Video Game Tracker</h1>
        <h2>Keep track of your favourite games, manage your game collection and discover new games  </h2>
        <div className="teaser">      <NavLink to="/games">Browse Games</NavLink>
        </div>
  
<NavLink to="/signup" className="button">Register</NavLink></article>


      </main>
    );
  }
   
  export default HomePage;