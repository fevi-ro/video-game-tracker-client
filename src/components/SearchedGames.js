import React from 'react'

import Game from './Game'

const SearchedGames = (props) => {
    return (
        <div 

          height="65vh" 
          border='1px' 
  
          width={{"sm": "98vw", "2xl": "50vw"}}
          rounded={10}
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
                            searched
                        />
            })}
        </div>
    )
}

export default SearchedGames