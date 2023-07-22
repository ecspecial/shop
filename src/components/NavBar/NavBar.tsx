import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/images/logo.svg';

const NavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    
        const handleWindowWidth = () => {
          if (window.innerWidth > 768) {
            setIsOpen(false);
          }
        };
    
        window.addEventListener('resize', handleWindowWidth);
    
        return () => {
          window.removeEventListener('resize', handleWindowWidth);
        };
      }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    const handleClick = () => {
        if (isOpen) {
            setIsOpen(!isOpen);
        }
    }

    return (
        <nav className={`navbar ${isOpen ? 'isOpen' : '' }`}>
            <div className='nav-header'>
                <div className={`burger ${isOpen ? 'isOpen' : '' }`} onClick={toggleMenu}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                <Link className='logo-container' to='/'>
                    <img className='nav-logo' src={logo} alt='logo' onClick={handleClick}/>
                </Link>
                <div className='right-side'></div>
            </div>
            <div className={`navbar-menu ${isOpen ? 'isOpen' : '' }`}>
                <div className={`navbar-list ${isOpen ? 'isOpen' : '' }`}>
                    <div className='navbar-item'>
                        <Link className='navbar-link' to='/' onClick={handleClick}>Home</Link>
                    </div>
                    <div className='navbar-item'>
                        <Link className='navbar-link' to='/contact' onClick={handleClick}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar