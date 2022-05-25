import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SearchedGames from './SearchedGames'

import './Search.css';


const Search = () => {
  const searchRef = useRef()
    const [searchResults, setSearchResults] = useState(null)

    const navigate = useNavigate()


    const searchHandler = async () => {


        try {
          const response = await axios.post(`${process.env.REACT_APP_URL}/games`, { 
            search: searchRef.current.value 
          })

          setSearchResults(<SearchedGames gameData={response.data}/>)
   

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
                onClick={searchHandler}      
            >
                Search
            </button>
            {searchResults ? <h2>Results</h2> : null}
            {searchResults}
        </main>
    )
}

export default Search