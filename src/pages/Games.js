import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/Search";



function Games() {
    const [gamesData, setGamesData] = useState([]);
    const [games, setGames] = useState([]);
    const storedToken = localStorage.getItem("authToken");
    useEffect(() => {
      fetchGames();
    }, []);
  
    const fetchGames = () => {
      axios.get(`${process.env.REACT_APP_URL}/games`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(response => {
        console.log(response.data.name)
          setGames(response.data);
        })
        .catch(e => console.log("error getting games from API...", e))
    }

    const handleSearch = (input) => {
            const searchedGames = gamesData.filter((eachGame) => {
            
              return (
                 eachGame.name.toLowerCase().includes(input) 
           );
            });
           setGames(searchedGames);
          };
   
          const resetList = () => {
                setGames(gamesData);
          };

        return (
          <div>
<div>
    
</div>
              
            <h2>List of games in our API:</h2>
            <Searchbar handleSearch={handleSearch} resetSearch={resetList} />
            {games.map((eachGame) => {
              return (
                <div key={eachGame.id} className="box">
                  <h3>{eachGame.name}</h3>
              
                </div>
              )
            })}
    
          </div>
        );
      

 }

export default Games;