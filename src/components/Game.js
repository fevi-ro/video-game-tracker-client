import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import GameDetails from './GameDetails'
import './Game.css';



const Game = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    


    return (


        <section className='card'>
        <button
     
        className='gameCard'
 onClick={onOpen}
        >
            <div className='cardContent'>
              
                <img src={props.image} alt="Game Image" width="500" height="600"></img>
                <h4>
                    {props.name}
                </h4>
            </div>
  
        
            
                <GameDetails 
                    isOpen={isOpen} 
                    onClose={onClose} 
                    image={props.image}
                    name={props.name}
                    id={props.id}
                    description={props.description}
                    franchise={props.franchise}
            platforms={props.platforms}
            
                    totalRating={props.totalRating}
                    releaseDate={props.releaseDate}
                />
        


        </button>


</section>

    )
}

export default Game