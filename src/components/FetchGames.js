import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchedGames from './SearchedGames'

import './FetchGames.css';


const FetchGames = () => {
  const searchRef = useRef()
    const [gameResults, setGameResults] = useState(null)

    const navigate = useNavigate()


    const renderGames = async () => {


        try {
          const response = await axios.post(`${process.env.REACT_APP_URL}/games`, { 
            search: searchRef.current.value 
          })

          setGameResults(<SearchedGames results={response.data}/>)
   

        }
        catch (error) {

          if (error.response.status === 401) {
            navigate("/login")
          }
        }
    }

    return (
        <main className='search'>
            <h1>Browse Games</h1>
            <input
                 type="text"
                placeholder="Game Title" 
                ref={searchRef}
            />
            <br/>
            <button 
                onClick={renderGames}      
            >
                Search
            </button>
            {gameResults ? <h2>Results</h2> : null}
            {gameResults}
        </main>
    )
}

export default FetchGames