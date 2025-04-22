import "./MobileNav.css"
import { SiCodechef } from 'react-icons/si';
import "../components/Navbar/Navbar"
import { CgCloseR } from "react-icons/cg";
export const MobileNav = ({toggleMenu,isOpen,setOpenMenu}) =>
{

    
    return (
    <>
            <div
                className={ `mobile-menu ${ isOpen ? "active" : "" }` }
                onClick={ ()=>{setOpenMenu(!isOpen)} }
            >
                <div className="mobile-menu-container" >
                    <SiCodechef size={ 50 } style={{marginBottom:"3rem"}} />
                    <ul>
                        <li>
                            <a href="#Home" className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href="#skills" className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href="#My-Repo" className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a href="#contact-me" className="menu-item">Contact Me</a>
                        </li>
                        <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
                    </ul>
                    <div className="icon">   <CgCloseR className='close-menu' style={ { fontSize: "1.8rem" } } onClick={ toggleMenu} /> </div>
            </div>
            
            </div>    
        </>
    )
}
