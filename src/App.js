import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";     
import Homepage from "./components/Homepage";    
import {useEffect, useState} from "react"
import axios from 'axios'
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import IsPrivate from "./components/IsPrivate"; 
import IsAnon from "./components/IsAnon";  
import Adventures from './pages/Adventures';
import FetchGames from './components/FetchGames';
import CreateAdventure from './pages/CreateAdventure';
import EditAdventure from './pages/EditAdventure';
import AdventureDetails from './pages/AdventureDetails';
import AddGameFromAPI from './components/AddGameFromAPI';
import GameCard from "./components/GameCard";



function App() {
  
  const [adventures, setAdventures] = useState([]);
 console.log(adventures)
  const storedToken = localStorage.getItem("authToken");
  useEffect(() => {
    fetchAdventures();
  }, []);

  const fetchAdventures = () => {
    axios.get(`${process.env.REACT_APP_URL}/adventures`,
    { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
        setAdventures(response.data);
      })
      .catch(e => console.log("error getting adventures from API...", e))
  }

    

  return (
    <div className="App">
    <Navbar />
<Routes>
<Route path='/' element={ <Homepage /> } />

<Route path='/games' element={ <IsPrivate><FetchGames/> <GameCard/> <AddGameFromAPI callbackUpdateList={fetchAdventures}/> </IsPrivate>} /> 


<Route path='/adventures' element={ <IsPrivate><Adventures adventures={adventures} callbackUpdateList={fetchAdventures}/> </IsPrivate>} /> 

<Route path='/adventures/create' element={ <IsPrivate> <CreateAdventure callbackUpdateList={fetchAdventures}/> </IsPrivate>} />
<Route path="/adventures/:advId" element={  <IsPrivate> <AdventureDetails /> </IsPrivate>} />   
<Route path='/adventures/:advId/edit' element={ <IsPrivate> <EditAdventure adventures={adventures} callbackUpdateList={fetchAdventures}/>  </IsPrivate>} />      
<Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon>} />
<Route path="/login" element={ <IsAnon>  <LoginPage /> </IsAnon> } />
</Routes>

    </div>
  );
}

export default App;
