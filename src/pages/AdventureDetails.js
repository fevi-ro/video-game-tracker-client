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
          <p>{adventure.image}</p>
          <h4>Description:</h4>
            <p>{adventure.franchise}</p>
            <h3>{adventure.date}</h3>
            <h3>{adventure.platforms}</h3>
            <h3>{adventure.notes}</h3>
            <p>{adventure.releaseDate}</p>
            <h3>{adventure.difficulty}</h3>
            <p>{adventure.played}</p>
            <p>{adventure.personalRating}</p>
        </>
      )} 

 
  {/* {adventure &&
        props.adventure?.map((adventure) => (
          <li className="TaskCard card" key={advId}>
            <h3>{adventure.name}</h3>
            <h4>Description:</h4>
            <p>{adventure.franchise}</p>
            <h3>{adventure.date}</h3>
            <h3>{adventure.platforms}</h3>
            <h3>{adventure.notes}</h3>
            <h3>{adventure.releaseDate}</h3>
            <h3>{adventure.difficulty}</h3>
            <h3>{adventure.played}</h3>
            <h3>{adventure.personalRating}</h3>
            <h3>{adventure.image}</h3>
          </li>
      ))}  */}
 
      <Link to="/adventures">
        <button>Back to adventures</button>
      </Link>

      <NavLink to={`/adventures/${advId}/edit`}>Edit</NavLink>

     
      

    </div>
  );
}
 
export default AdventureDetails;