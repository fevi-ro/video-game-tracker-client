import axios from "axios";
import { NavLink } from "react-router-dom";



function Adventures(props){

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
                <div key={element._id} className="project-summary box">
                    <p>{element.name}</p>
                    <NavLink to={`/adventures/${element._id}`}>More details</NavLink> |&nbsp;
                    <NavLink to={`/adventures/${element._id}/edit`}>Edit</NavLink> |&nbsp;
                    <a href="#" onClick={() => {deleteAdventure(element._id)}}>Delete</a>
                </div>
            )
        });
        return result;
    }

    return (
        <div className="Adventures">
            <h1>My Adventures</h1>

            <NavLink to={'/adventures/create'}>Add Adventure</NavLink>
           

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