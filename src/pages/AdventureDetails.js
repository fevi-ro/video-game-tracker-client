import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import './AdventureDetails.css';
 
 
function AdventureDetails (props) {
  const [adventure, setAdventure] = useState("");
  const storedToken = localStorage.getItem("authToken");
  const {advId} = useParams();    




  useEffect(()=> {                  
    
    axios.get(`${process.env.REACT_APP_URL}/adventures/${advId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const oneAdventure = response.data;

        setAdventure(oneAdventure);
      })
      .catch((error) => console.log(error));
  }, [] );



  return (
    <div className="adventureDetails">
 {adventure && (
        <>
          <h1>{adventure.name}</h1>
          {console.log(adventure.name)}
   <img src={adventure.image} alt="game cover" />
          <h2>Details:</h2>
            <p>{adventure.franchise}</p>
            <p>{adventure.releaseDate}</p>
            <h3>Date Played: {adventure.date}</h3>
            <h3>Total rating: {adventure.totalRating}</h3>
            <h3>{adventure.platforms}</h3>
            <h3>Personal notes: {adventure.notes}</h3>
            <p>{adventure.description}</p>
            <h3>{adventure.similarGames}</h3>
            <h3>{adventure.companiesInvolved}</h3>
            <h3>Difficulty: {adventure.difficulty}</h3>
            <p>{adventure.played}</p>
            <h3>Personal Rating: {adventure.personalRating}/10</h3>
        </>
      )} 


 
 

      <NavLink to={`/adventures/${advId}/edit`}>Edit</NavLink>
      <br/>
     
      <Link to="/adventures">
        <button>Back to adventures</button>
      
      </Link>

    </div>
  );
}
 
export default AdventureDetails;