import { NavLink } from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "../context/auth.context"; 
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import './Navbar.css';


function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  return (

<ResponsiveNavbar   

    logo={<p>Logo</p>}
    
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
      navigationBarSmall: {
        backgroundColor: 'aliceblue',
      },
      navigationCardSmall: {
        backgroundColor: 'aliceblue',
      },
    }}

    className="navbar"
  >
      <ul>
        <li> <NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/games">Browse Games</NavLink></li>
        <li><NavLink to="/adventures">My Adventures</NavLink> </li>
        { isLoggedIn &&
    

<>
<li><span>Welcome {user.email}</span></li>



{/*   UPDATE   */}
<button onClick={logOutUser}>Logout</button>
<span>{user && user.name}</span>
</>


 
    }

{ !isLoggedIn &&
        <>

         <li><NavLink to="/signup">Register</NavLink></li> 
       <li><NavLink to="/login">Login</NavLink></li>   
        </>
    }

 
      </ul>

  </ResponsiveNavbar>
  );
}
 
export default Navbar;