import React from 'react'

import Game from './Game'

const SearchedGames = (props) => {

  
    return (
      
<main className='searchedGames'>
        <div className='container' 

 
        >
            {props.gameData.map(data => {

                return <Game
                            key={data.id}
                            id={data.id}
                            image={data.url ? data.url.replace("t_thumb", "t_cover_big") : null} 
                            name={data.name}
                            description={data.summary}
                            releaseDate={data.first_release_date}
                            franchise={data.franchise}
                    platforms={data.platforms}
                            totalRating={data.total_rating_count}
                            searched
                        />
            })}
        </div>
        </main>
    )
    
}

export default SearchedGames