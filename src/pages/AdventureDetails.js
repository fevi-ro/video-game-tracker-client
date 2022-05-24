import { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createLocalStorageManager } from "@chakra-ui/react";
 
 
function AdventureDetails (props) {
  const [adventure, setAdventure] = useState("");
  const storedToken = localStorage.getItem("authToken");
  const {advId} = useParams();    




  useEffect(()=> {                  
    
    axios.get(`${process.env.REACT_APP_URL}/adventures/${advId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const oneAdventure = response.data;
    //    console.log(adventure.name); //returns undefined
        setAdventure(oneAdventure);
      })
      .catch((error) => console.log(error));
  }, [] );



  return (
    <div className="AdventureDetails">
 {adventure && (
        <>
          <h1>{adventure.name}</h1>
          {console.log(adventure.name)}
   <img src={adventure.image} alt="game cover" />
          <h4>Description:</h4>
            <p>{adventure.franchise}</p>
            <p>{adventure.releaseDate}</p>
            <h3>{adventure.date}</h3>
            <h3>{adventure.platforms}</h3>
            <h3>{adventure.notes}</h3>
            <p>{adventure.description}</p>
            <h3>{adventure.similarGames}</h3>
            <h3>{adventure.companiesInvolved}</h3>
            <h3>{adventure.difficulty}</h3>
            <p>{adventure.played}</p>
            <p>{adventure.personalRating}</p>
        </>
      )} 


 
      <Link to="/adventures">
        <button>Back to adventures</button>
      </Link>

      <NavLink to={`/adventures/${advId}/edit`}>Edit</NavLink>

     
      

    </div>
  );
}
 
export default AdventureDetails;