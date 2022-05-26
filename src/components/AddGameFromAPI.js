
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import './AddGameFromAPI.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddGameFromAPI(props) {
  let myAdventure = {};


  if (props.adventureData === undefined) {
    myAdventure = {};
    myAdventure.name = props.name;
    myAdventure.image = "";
    myAdventure.franchise = "";
    myAdventure.releaseDate = "";
    myAdventure.platforms = "";
    myAdventure._id = "";
    myAdventure.totalRating = "";
  } else {
    myAdventure = Object.assign({}, props.adventureData); //assigning to my game so it can be referenced in the form
  }

  //set value of form input from the games catalogue (if any) or the empty form
  const [name, setName] = useState(props.name);
  const [image, setImage] = useState(props.image);
  const [platforms, setPlatforms] = useState(myAdventure.platforms);
 const [played, setPlayed] = useState("");
  

  //set value of form input to blank
  const [difficulty, setDifficulty] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [personalRating, setPersonalRating] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
 

  const adventure = {
    name:name,
    image: image,
    date: date,
    platforms: platforms,
    notes: notes,
 difficulty: difficulty,
    played: played,
    personalRating: personalRating,
  };
  console.log("testing adventures");
console.log(adventure);




  const createNewAdventure = (e) => {
    e.preventDefault();

 

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_URL}/adventures`, adventure, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        setName("");
        setDate("");
        setPlatforms("");
        setNotes("");
        setImage("");
        setDifficulty("");
        setPlayed("");
        setPersonalRating(0);


  


        props.callbackUpdateList();

        navigate("/adventures");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const notify = () => toast.success('🦄 Game saved to your adventures!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
 
    return (
        <section className="addGame">
            <h1>Add Game</h1>
         
            <form onSubmit={createNewAdventure}>
                <label for="name">
                    Game Title
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label for="image">
                Image
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={image}
                        required={false}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label for="date"> 
                Date Played
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        required={false}
                        onChange={(e) => setDate(e.target.value)}
                    />
               </label>
                <label for="platforms">
                Platforms
                    <input
                        type="text"
                        name="platforms"
                        id="platforms"
                        value={platforms}
                        placeholder="Playstation, SNES, etc."
                        required={false}
                        onChange={(e) => setPlatforms(e.target.value)}
                    />
                </label>
                <label for="notes">
                Notes
                    <input
                        type="text"
                        name="notes"
                        id="notes"
                        value={notes}
                        required={false}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
                <label>Difficulty</label>
        <select
          value={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option value="">Please select one</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <label>Played</label>
        <select value={played} onChange={(e) => setPlayed(e.target.value)}>
          <option value="">Please select one</option>
          <option value="played">Played</option>
          <option value="not played">Not Played</option>
        </select>
        <label>Personal Rating</label>
        <select value={personalRating} onChange={(e) => setPersonalRating(e.target.value)}>
          <option value="">Please select one</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

  <button  type="submit" className="button" onClick={notify}>Save Game</button> 



 
            </form>
            <ToastContainer />
        </section>
    )

    }

    export default AddGameFromAPI

