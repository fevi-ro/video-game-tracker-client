import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, NavLink } from "react-router-dom";
import { Modal, ModalContent} from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import AddGameFromAPI from './AddGameFromAPI';
import { Routes, Route } from "react-router-dom"; 



function GameDetails(props) {

    const [game, setGame] = useState({});
   const { gameId } = useParams();
  
/*  useEffect(() => {
        axios
        .post(`${process.env.REACT_APP_URL}/games/${props.id}`)   // that's the correct id
          .then((response) => {

            setGame(<AddGameFromAPI pizza={response.data}/>)
   
          })
          .catch(e => console.log("error getting game from API...", e))
        
      }, []); */

    return (

     <div>
 {/* <Routes>

<Route path='/add-adventure' element={<AddGameFromAPI/> }/>  

</Routes>  */}



        <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
            <ModalContent>
            <h1>{props.name}</h1>
            <article>
                <div>
                    <img src={props.image}/>
                
                </div>   
                    <div>
                        <h3>Description</h3>
                    </div>
                    {props.description}  

                   <h3>{props.franchise}</h3> 
                   <h3>{props.first_release_date}</h3>    
            </article>
            <footer>
                <button  onClick={props.onClose}>Close</button>
                <div className="add-event-btn">

 <NavLink to={`/add-adventure/${props.id}`}>Add Game</NavLink>  
 <AddGameFromAPI
image={props.image}
name={props.name}
franchise={props.franchise}
id={props.id}
description={props.description}
releaseDate={props.releaseDate}
/>
 
              </div>
            </footer>
            </ModalContent>
        </Modal>

        </div>

    )
}

export default GameDetails