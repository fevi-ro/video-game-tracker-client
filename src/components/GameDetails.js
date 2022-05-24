import React, { useState } from 'react'

import { NavLink } from "react-router-dom";
import { Modal, ModalContent } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import AddGameFromAPI from './AddGameFromAPI';

import './GameDetails.css';



function GameDetails(props) {

    const [game, setGame] = useState({});
    const { gameId } = useParams();


    return (

        <div>




            <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
                <ModalContent>
                    <h1>{props.name}</h1>
                    <article className='details'>
                        <div>
                            <img src={props.image} />

                        </div>
                        <div>
                            <h3>Description</h3>
                        </div>
                        {props.description}

                        <h3>{props.franchise}</h3>
                        <h3>{props.releaseDate}</h3>
                        <h3>{props.totalRating}</h3>

                    </article>


                    <div className="add-event-btn">


<AddGameFromAPI
    image={props.image}
    name={props.name}
    franchise={props.franchise}
    id={props.id}
    description={props.description}
    releaseDate={props.releaseDate}
    totalRating={props.totalRating}
/>

</div>

                    <footer>

                   
                        <button onClick={props.onClose}>Close</button>
                    </footer>
                </ModalContent>
            </Modal>

        </div>

    )
}

export default GameDetails