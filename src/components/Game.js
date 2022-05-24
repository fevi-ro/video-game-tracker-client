import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import GameDetails from './GameDetails'



const Game = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    if (props.searched) {
     
    }

    return (
        <section>
        <button
        
            m="10px" 
            padding="1px"
            height="fit-content"
            display="inline-block"
            rounded={10}
            _hover={{bg: "#581845"}}
            background="#CAFFB3"
            boxshadow="5px 5px #900C3F"
            onClick={onOpen}
        >
            <div>
              
                <img src={props.image} alt="Game Image" width="500" height="600"></img>
            </div>
            <div>
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
                    releaseDate={props.releaseDate}
                />
        


        </button>


</section>
    )
}

export default Game