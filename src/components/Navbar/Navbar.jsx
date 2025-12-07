import React, { useState } from 'react'
import "./Navbar.css"
import { SiCodechef } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { MobileNav } from '../../MobileNav/MobileNav';
const Navbar = () =>
{
    const [ openMenu, setOpenMenu ] = useState( false );
    const toggleMenu = () =>
    {
        setOpenMenu( !openMenu );
    };
    return (
        <>
            <MobileNav isOpen={ openMenu } toggleMenu={toggleMenu} setOpenMenu={setOpenMenu} />
        <nav className='nav-wrapper'>
                <div className="nav-content">
                    <div className="nav-icon"> 
                        <SiCodechef size={ 50 }  />
                        </div>
                    
                    <ul>
                        <li>
                            <a href='#Home' className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href='#skills' className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href="#My-Repo" className="menu-item">My-Repo</a>
                        </li>
                        <li>
                            <a  href='#contact-me' className="menu-item">Contact Me</a>
                        </li>
                    </ul>
                    <div className="btn">
                        { openMenu ?"":
                            <IoMenu className='open-menu' style={ { fontSize: "2rem" } } onClick={ toggleMenu} /> 
                        }
                    </div>
            </div>
            </nav>
            </>
    )
}
export default Navbar