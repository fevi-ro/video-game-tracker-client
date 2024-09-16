import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import './EditAdventure.css';


function CreateAdventure(props) {
  let myAdventure = {};


  if (props.adventureData === undefined) {
    myAdventure = {};
    myAdventure.name = "";
    myAdventure.image = "";
    myAdventure.franchise = "";
    myAdventure.platforms = "";
    myAdventure._id = "";
  } else {
    myAdventure = Object.assign({}, props.adventureData); //assigning to my game so it can be referenced in the form
  }

  //set value of form input from the games catalogue (if any) or the empty form
  const [name, setName] = useState(
    `${myAdventure.name} ${myAdventure.franchise}`
  );
  const [image, setImage] = useState(myAdventure.image);
  const [platforms, setPlatforms] = useState(myAdventure.platforms);
 const [played, setPlayed] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [personalRating, setPersonalRating] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");


  const navigate = useNavigate();

  const adventure = {
    name: name,
    image: image,
    date: date,
    platforms: platforms,
    notes: notes,
    difficulty: difficulty,
    played: played,
    personalRating: personalRating,
    gameListId: myAdventure._id
  };

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


  return (
    <div className="wrapperEdit">
           <section className="editAdventure">
      <form className="form" onSubmit={createNewAdventure}>
      <h1>Add Adventure</h1>
        <label>Game Title</label>
        <input
          type="text"
       
          value={name}
          required={true}
          onChange={(e) => {
            setName(e.target.value);
          }}
          
        />
        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
         <label htmlFor="date"> 
                Date Played
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                   
                        onChange={(e) => setDate(e.target.value)}
                    />
               </label>
           <label htmlFor="platforms">
                Platforms
                    <input
                        type="text"
                        name="platforms"
                        id="platforms"
                        value={platforms}
                        placeholder="Playstation, SNES, etc."
                    
                        onChange={(e) => setPlatforms(e.target.value)}
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
        <label>Notes</label>
        <input
          type="textarea"
          value={notes}
          required={true}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></input>
        <label>Played</label>
        <select value={played} onChange={(e) => setPlayed(e.target.value)}>
          <option value="">Please select one</option>
          <option value="played">Played</option>
          <option value="not played">Not Played</option>
        </select>
        <div className="form-buttons">
      
          <button className="form-submit-btn" type="submit">
            Add Adventure
          </button>
        </div>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      </section>
    </div>
  );
}

export default CreateAdventure;