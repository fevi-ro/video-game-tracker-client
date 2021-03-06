import axios from "axios";
import { NavLink } from "react-router-dom";
import './Adventures.css';


function Adventures(props){
console.log(props);
    const deleteAdventure = (advId) => {

        const storedToken = localStorage.getItem('authToken');
        axios.delete(`${process.env.REACT_APP_URL}/adventures/${advId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )
            .then(response => {
                props.callbackUpdateList();
            })
            .catch(e => console.log("error deleting adventure...", e));
    }
    
    const renderAdventures = () => {
        const result = props.adventures.map( (element) => {
            return (
                <div key={element._id} className="adventureBox">
                    <div className="cardAdv">
                    <h2>{element.name}</h2>
                    <img src={element.image} alt="" />
                    <h3>Total Rating: {element.totalRating}</h3>
                    <NavLink to={`/adventures/${element._id}`}>MORE DETAILS</NavLink> &nbsp;&nbsp;&nbsp;
                    <NavLink to={`/adventures/${element._id}/edit`}>EDIT</NavLink> &nbsp;&nbsp;&nbsp;
                    <a href="#" onClick={() => {deleteAdventure(element._id)}}>DELETE</a>
                    </div>
                </div>
            )
        });
        return result;
    }

    return (
        <div className="adventures">
            <h1>My Adventures</h1>

            <NavLink className="addAdv" to={'/adventures/create'}>Add Adventure</NavLink>
           

             <section>
                 { props.adventures === null
                    ? <p>loading...</p>
                    : renderAdventures()
                }
             </section>

        </div>
    );
}

export default Adventures;