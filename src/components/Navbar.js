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
        <li> <NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/games">BROWSE GAMES</NavLink></li>
        <li><NavLink to="/adventures">MY ADVENTURES</NavLink> </li>
        { isLoggedIn &&
    

<>
<li><span>WELCOME &nbsp; &nbsp; {user.email}</span></li>



{/*   UPDATE   */}
<button className="logout" onClick={logOutUser}>LOGOUT</button>
<span>{user && user.name}</span>
</>


 
    }

{ !isLoggedIn &&
        <>

         <li><NavLink to="/signup">REGISTER</NavLink></li> 
       <li><NavLink to="/login">LOGIN</NavLink></li>   
        </>
    }

 
      </ul>

  </ResponsiveNavbar>
  );
}
 
export default Navbar;