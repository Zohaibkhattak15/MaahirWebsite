import React, { useState , useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { FaTimes , FaBars } from 'react-icons/fa';
import WebLogo from '../../assets/logo-black.png';



function Navbar() {
  
  const [click, setClick] = useState(false);
   const [active, setactive] = useState('Home');
   
  /* changing the Fabars icon to fa times icon */
  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  

 /* This state is basically initilizing the animation on scroll */
    
  useEffect(() => {
    Aos.init({duration : 2000})
  }, []);


  return (
    <>
    <div className="sticky "  >
      <nav className='navbar'>
        <div className={active =='Home' ? 'nav-item nav-active' : ' nav-item' }  onClick={ () => setactive('Home') }>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={WebLogo} alt="website logo" className="navbar-logo" />
        </Link>
        </div>


         {/* this below div is for the toggle menue   */}
        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>


            <ul className={click ? 'nav-menu active' : 'nav-menu'}  >
                <li className={active =='Home' ? 'nav-item nav-active' : ' nav-item' }  onClick={ () => setactive('Home') }>
                    <Link 
                        to='/home' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
            
                <li className={active =='Services' ? 'nav-item nav-active' : ' nav-item' } onClick={ () => setactive('Services') }>
                    <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                      Services 
                    </Link>
                </li>
                <li className={active =='About Us' ? 'nav-item nav-active' : ' nav-item' } onClick={ () => setactive('About Us') }>
                    <Link
                    to='/about-us'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                    About Us
                    </Link>
                </li>
                <li className={active =='Contact Us' ? 'nav-item nav-active' : ' nav-item' } onClick={ () => setactive('Contact Us') }>
                    <Link
                    to='/contact-us'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                    Contact Us
                    </Link>
                </li>
                
            </ul>

        
      </nav>
      </div>
    </>
  );
}

export default Navbar;
