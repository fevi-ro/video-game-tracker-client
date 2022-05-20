import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";



function CreateAdventure(props) {
  let myAdventure = {};


  if (props.adventureData === undefined) {
    myAdventure = {};
    myAdventure.name = "";
    myAdventure.image = "";
    myAdventure.franchise = "";
    myAdventure.releaseDate = "";
    myAdventure.platforms = "";
    myAdventure._id = "";
    myAdventure.totalRating = 0;
  } else {
    myAdventure = Object.assign({}, props.adventureData); //assigning to my game so it can be referenced in the form
  }

  //set value of form input from the games catalogue (if any) or the empty form
  const [name, setName] = useState(
    `${myAdventure.name} ${myAdventure.franchise}`
  );
  const [image, setImage] = useState(myAdventure.image);
  const [franchise, setFranchise] = useState(myAdventure.franchise);
  const [releaseDate, setReleaseDate] = useState(myAdventure.releaseDate);
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
    name: name,
    franchise: franchise,
    date: date,
    platforms: platforms,
    notes: notes,
    releaseDate: releaseDate,
    difficulty: difficulty,
    played: played,
    personalRating: personalRating,
    gameListId: myAdventure._id,
  //  userId: user._id,
  };

  const createNewEvent = (e) => {
    e.preventDefault();

    const url = process.env.REACT_APP_URL + "/api/adventures";

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(url, adventure, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        setName("");
        setFranchise("");
        setDate("");
        setPlatforms("");
        setNotes("");
        setImage("");
        setReleaseDate("");
        setDifficulty("");
        setPlayed("");
        setPersonalRating(0);

        navigate("/adventures");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  //set game from the API
  //fill name with game name from API
  return (
    <div>
      <form className="form" onSubmit={createNewAdventure}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
        <label>Franchise</label>
        <input
        type="text"  
          value={franchise}
          onChange={(e) => {
            setFranchise(e.target.value);
          }}
          ></input>

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
        <label>Date Played</label>
        <input
          type="text"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
        <label>Personal Rating</label>
        <input
          type="number"
          value={personalRating}
          onChange={(e) => {
            setPersonalRating(e.target.value);
          }}
        ></input>
        <label>Notes</label>
        <input
          type="textarea"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></input>
        <label>Played</label>
        <select value={played} onChange={(e) => setPlayed(e.target.value)}>
          <option value="">Please select one</option>
          <option value="true">Played</option>
          <option value="false">Not Played</option>
        </select>
        <div className="form-buttons">
          <ButtonLink
            classProp="btn-link-dark"
            url={props.cancelUrl}
            text="Cancel"
          />
          <button className="form-submit-btn" type="submit">
            Add Adventure
          </button>
        </div>
      </form>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
    </div>
  );
}

export default CreateAdventure;