import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './EditAdventure.css';

function EditAdventure(props) {

    const navigate = useNavigate();

    const {advId} = useParams();


    const storedToken = localStorage.getItem('authToken');

    
    const adventureDetails = props.adventures.find( adventure => adventure._id === advId); // get the details of the project that we're trying to edit


    const [name, setName] = useState(adventureDetails.name);
      const [image, setImage] = useState(adventureDetails.image);
      const [franchise, setFranchise] = useState(adventureDetails.franchise);
      const [releaseDate, setReleaseDate] = useState(adventureDetails.releaseDate);
      const [platforms, setPlatforms] = useState(adventureDetails.platforms);
     const [played, setPlayed] = useState(adventureDetails.played);
    const [difficulty, setDifficulty] = useState(adventureDetails.difficulty);
  const [date, setDate] = useState(adventureDetails.date);
  const [notes, setNotes] = useState(adventureDetails.notes);
  const [personalRating, setPersonalRating] = useState(adventureDetails.personalRating);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            name,
            image,
            franchise,
            date,
            platforms,
            notes,
            releaseDate,
            difficulty,
           played,
            personalRating
        }

        axios.put(`${process.env.REACT_APP_URL}/adventures/${advId}`, newDetails, 
        { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(response => {
                props.callbackUpdateList();

                navigate("/adventures"); 
            })
            .catch(e => console.log("error updating adventure...", e));
    }

    return (
        <div className="wrapperEdit">
        <section className="editAdventure">
            <h1>Edit</h1>

            <form onSubmit={handleSubmit}>
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

                <button type="submit">Update Adventure</button>

            </form>

 <NavLink to="/adventures" className="button">Back</NavLink> 
        </section>
        </div>
    )
}

export default EditAdventure;