import React, { useState } from 'react'

import { NavLink } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Box
} from "@chakra-ui/react"

import { useParams } from "react-router-dom";
import AddGameFromAPI from './AddGameFromAPI';
import './GameDetails.css';



function GameDetails(props) {

    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    return (

        <div>




            <Modal isOpen={props.isOpen} onClose={props.onClose} size="full" isCentered>

                <ModalOverlay />
                <ModalContent className='details'>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className='heading'> <h1>{props.name}</h1></div>
                   
                        <div className='gameData'>
                      
                            <div className='gameImage'>
                      
                                <img src={props.image} />
                            </div>
                            <div className='description'>
                                <h3>Description</h3>

                                <p> {props.description}</p>
                                <h4>{props.franchise}</h4>
                                <h4> Release Date UTS: {props.releaseDate}</h4>
                                <h4> Total Rating: {props.totalRating}</h4>
                            </div>
                        </div>

                        <div className="addGameForm">

                            <Box className='gameAdd'
                                borderWidth="2px"
                                borderColor="black"
                                padding="10px"
                                maxHeight="300px"
                                overflowY="scroll"
                            >
                                <AddGameFromAPI
                                    image={props.image}
                                    name={props.name}
                                    franchise={props.franchise}
                                    id={props.id}
                                    description={props.description}
                                    releaseDate={props.releaseDate}
                                    totalRating={props.totalRating}
                                />
                            </Box>
                            <button className="closeBtn" onClick={props.onClose}>Close</button>
                        </div>

                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>

    )
}

export default GameDetails