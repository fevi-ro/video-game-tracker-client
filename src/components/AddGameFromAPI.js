
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";



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
    myAdventure.totalRating = 0;
  } else {
    myAdventure = Object.assign({}, props.adventureData); //assigning to my game so it can be referenced in the form
  }

  //set value of form input from the games catalogue (if any) or the empty form
  const [name, setName] = useState(props.name);
  const [image, setImage] = useState(props.image);
  const [franchise, setFranchise] = useState(props.franchise);
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
    name:name,
    image: image,
    franchise: franchise,
    date: date,
    platforms: platforms,
    notes: notes,
    releaseDate,
 difficulty: difficulty,
    played: played,
    personalRating: personalRating,
   
  //  userId: user._id,
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

    return (
        <section className="EditAdventure">
            <h1>Add Game</h1>

            <form onSubmit={createNewAdventure}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                Image
                    <input
                        type="text"
                        name="image"
                        value={image}
                        required={false}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label>
                Franchise
                    <input
                        type="text"
                        name="franchise"
                        value={franchise}
                        required={false}
                        onChange={(e) => setFranchise(e.target.value)}
                    />
                </label>
                <label>
                Date Played
                    <input
                        type="text"
                        name="date"
                        value={date}
                        required={false}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>
                Platforms
                    <input
                        type="text"
                        name="platforms"
                        value={platforms}
                        required={false}
                        onChange={(e) => setPlatforms(e.target.value)}
                    />
                </label>
                <label>
                Notes
                    <input
                        type="text"
                        name="notes"
                        value={notes}
                        required={false}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
                <label>
                Release Date
                    <input
                        type="text"
                        name="releaseDate"
                        value={releaseDate}
                        required={false}
                        onChange={(e) => setReleaseDate(e.target.value)}
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
          <option value="true">Played</option>
          <option value="false">Not Played</option>
        </select>
                <label>
                Personal Rating
                    <input
                        type="text"
                        name="personalRating"
                        value={personalRating}
                        required={true}
                        onChange={(e) => setPersonalRating(e.target.value)}
                    />
                </label>

                <button type="submit">Save Game</button>

            </form>

        </section>
    )

    }

    export default AddGameFromAPI