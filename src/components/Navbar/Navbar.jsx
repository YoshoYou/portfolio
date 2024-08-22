import React, { useRef, useState } from 'react'
import "./Navbar.css"
import { SiCodechef } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { MobileNav } from '../../MobileNav/MobileNav';
// import useScroll from '../WindowSize/useScroll';
const Navbar = () =>
{
    const ref = useRef();
    const ref2 = useRef();
    const [ openMenu, setOpenMenu ] = useState( false );
    const toggleMenu = () =>
    {
        setOpenMenu( !openMenu );
    };
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.onscroll = () =>
    {
        const currentHeight = document.documentElement.scrollTop; 
        ref.current.style.width = `${  ( currentHeight / totalHeight ) * 100  }%`;
        if ( currentHeight > 400 )
        {
            ref2.current.style.right = '3.5rem';
        }
        else
        {
            ref2.current.style.right = '-16rem';
        }
    }
    const handleClick = () =>
    {
        window.scrollTo( {
            top: '0rem',
            behavior:'smooth',
        })        
    }
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
                        <button className="contact-btn" onClick={ ()=>{ }} >
                            Hire Me
                        </button>
                    </ul>
                    <div className="btn">
                        { openMenu ?"":
                            <IoMenu className='open-menu' style={ { fontSize: "2rem" } } onClick={ toggleMenu} /> 
                        }
                    </div>
            </div>
            </nav>
            <div className="nav-scrollColor-progress" ref={ ref } ></div>
            <span className='scroll-btn' ref={ref2} onClick={handleClick} >up</span>
        </>
    )
}
export default Navbar