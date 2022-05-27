import React from 'react'

import GameCard from './GameCard'

const SearchedGames = (props) => {

  
    return (
      
<main className='searchedGames'>
        <div className='container' 

 
        >
            {props.results.map(game => {

                return <GameCard
                            key={game.id}
                            id={game.id}
                            image={game.url ? game.url.replace("t_thumb", "t_cover_big") : null} 
                            name={game.name}
                            description={game.summary}
                            releaseDate={game.first_release_date}
                            franchise={game.franchise}
                    platforms={game.platforms}
                            totalRating={game.total_rating_count}
                            searched
                        />
            })}
        </div>
        </main>
    )
    
}

export default SearchedGames