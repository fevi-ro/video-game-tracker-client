import { NavLink } from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "../context/auth.context"; 
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";
import './Navbar.css';
import logo from '../images/logo.png';


function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  return (

<ResponsiveNavbar   


    
    styles={{

      navigationBarSmall: {
        backgroundColor: 'transparent',
      },
      navigationCardSmall: {
        backgroundColor: "transparent"
      },
    }}

    className="navbar"
  >
     <img className="logo" src={logo} alt="Logo" />
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