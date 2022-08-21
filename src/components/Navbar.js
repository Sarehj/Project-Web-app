import React, {useState}  from 'react'
import * as BIconName from "react-icons/ai";
import * as IconCName from "react-icons/ai";
import { Link , useNavigate } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';
import {RiLogoutCircleRLine} from "react-icons/ri";
import {useUserAuth} from "../store/UserAuthContext"
import './Navbar.css';

function Navbar() {

    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    
  

    //  update the state = setSidbar
    // is not showing => false   
    const  [sidebar, setSidebar] = useState(false) 
    const showSidebar= () => setSidebar(!sidebar)   //reversing the value to true
    
    return (
  
           <>
           <IconContext.Provider value={{color: '#fff'}} >
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <BIconName.AiOutlineBars onClick={showSidebar} />
                </Link>
                    <h1 className='title'>YOUPIPE</h1>
                <Link to='/'>
                <RiLogoutCircleRLine className='logout' onClick={handleLogout}>Logout</RiLogoutCircleRLine>
                </Link>
                

            </div>
            {/*we use state hook, if is true meaning if I clicked on the icon is
       showing , otherwise it's hidden */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                             <IconCName.AiOutlineClose />    
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.classN}>
                                <Link style= {{color:'#fff'}} to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </IconContext.Provider>

        </>
   
   )}
 
  

export default Navbar;
