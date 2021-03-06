import { NavLink } from "react-router-dom";
import './Homepage.css';
import background from '../images/background5.jpg';



function HomePage() {


    return (
      <main className="homepage"  style={{ backgroundImage: `url(${background})` }}>
        
        <article><h1>Video Game Tracker</h1>
       
        <div className="teaser">     <h2>Keep track of your favourite games, manage your game collection and discover new games  </h2>
          <NavLink to="/games" className="button">Browse Games</NavLink>
        </div>
  
</article>


      </main>
    );
  }
   
  export default HomePage;