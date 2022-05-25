import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import GameDetails from './GameDetails'
import moment from 'moment';
import './Game.css';



const Game = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    const releaseDate = moment.unix(props.releaseDate).format("MM/DD/YYYY")

    if (props.searched) {
 
    }

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