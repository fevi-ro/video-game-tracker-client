import { NavLink } from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "../context/auth.context"; 
 
function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  return (
    <nav className="Navbar">
    <NavLink to="/">Home</NavLink> | 
    <NavLink to="/games">Browse Games</NavLink> | 
    <NavLink to="/adventures">My Adventures</NavLink> |||
    { isLoggedIn &&

<>
<span>Welcome {user.email}</span>



{/*   UPDATE   */}
<button onClick={logOutUser}>Logout</button>
<span>{user && user.name}</span>
</>


 
    }

    { !isLoggedIn &&
        <>
            <NavLink to="/signup">Register</NavLink> |
            <NavLink to="/login">Login</NavLink> |
        </>
    }
</nav>
  );
}
 
export default Navbar;