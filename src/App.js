import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";     
import Homepage from "./components/Homepage";    
//import {useEffect, useState} from "react"
//import axios from 'axios'
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';
import IsPrivate from "./components/IsPrivate"; 
import IsAnon from "./components/IsAnon";  
import Adventures from './pages/Adventures';
import Games from './pages/Games';

function App() {
  return (
    <div className="App">
    <Navbar />
<Routes>
<Route path='/' element={ <Homepage /> } />

<Route path='/games' element={ <IsPrivate><Games/> </IsPrivate>} /> 

<Route path='/adventures' element={ <IsPrivate><Adventures/> </IsPrivate>} /> 

<Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon>} />
<Route path="/login" element={ <IsAnon>  <LoginPage /> </IsAnon> } />
</Routes>

    </div>
  );
}

export default App;
