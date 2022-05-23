import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


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

                navigate("/adventures"); // redirect to project list
                // navigate(`/projects/${response.data._id}`); // redirect to project page
            })
            .catch(e => console.log("error updating adventure...", e));
    }

    return (
        <section className="EditAdventure">
            <h1>Edit</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Title
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
                        required={true}
                        onChange={(e) => setFranchise(e.target.value)}
                    />
                </label>
                <label>
                Date Played
                    <input
                        type="text"
                        name="date"
                        value={date}
                        required={true}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>
                Platforms
                    <input
                        type="text"
                        name="platforms"
                        value={platforms}
                        required={true}
                        onChange={(e) => setPlatforms(e.target.value)}
                    />
                </label>
                <label>
                Notes
                    <input
                        type="text"
                        name="notes"
                        value={notes}
                        required={true}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
                <label>
                Release Date
                    <input
                        type="text"
                        name="releaseDate"
                        value={releaseDate}
                        required={true}
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

                <button type="submit">Update Adventure</button>

            </form>

        </section>
    )
}

export default EditAdventure;