import logoImg from '../../assets/images/kidLand-logo.jpeg'
import phoneCallImg from '../../assets/images/phoneCall-logo.svg'
import mailImg from '../../assets/images/mail-logo.svg'
import instaImg from '../../assets/images/insta-logo.svg'
import faceBookImg from '../../assets/images/facebook-logo.svg'
import whatsAppImg from '../../assets/images/wp-logo.svg'
import menu from '../../assets/images/hamburger-menu.svg'
import closeMenu from '../../assets/images/close-menu.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import './styles.scss'
function Header(){
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return(
        <div className="nav">
            <div className='nav-1'>
                <div className='phone-mail-section'>
                    <div className='phone-call'>
                        <img src={phoneCallImg} alt="phone-call-icon" />
                        +944 xx xxx xx xx
                    </div>
                    <div className='mail'>
                        <img src={mailImg}alt="" />
                        example@gmail.com
                    </div>
                </div>
                
                <div className='social-media-section'>
                    <Link to='https://www.instagram.com/kidlandacademy/' target="_blank" className='instagram'>
                        <img src={instaImg} alt="instagram-logo" />
                    </Link>

                    <Link to='' className='facebook'>
                        <img src={faceBookImg} alt="faceBook-logo" />
                    </Link>
                    
                    <Link className='whatsapp'>
                        <img src={whatsAppImg} alt="whatsApp-logo" />
                    </Link>
                </div>

            </div>

            <div className='nav-2'>
                <div className='logo-menu'>
                    <Link to='/' className="logo">
                        <img src={logoImg} alt="logo-icon" />
                    </Link>

                    <div className="menu" onClick={toggleMenu}>
                        {isMenuOpen ? (
                        <img src={closeMenu} alt="close-menu" />
                        ) : (
                        <img src={menu} alt="menu" />
                        )}
                    </div>
                </div>
                

                <div className={`links ${isMenuOpen ? 'show-links' : ''}`}>

                    <Link to='/' className='link' onClick={toggleMenu}>
                        Ana səhifə
                    </Link>

                    <Link to='/courses'className='link' onClick={toggleMenu}>
                        Xidmətlərimiz
                    </Link>

                    <Link to='./aboutus' className='link' onClick={toggleMenu}>
                        Haqqımızda
                    </Link>

                    <Link to='./blogs' className='link' onClick={toggleMenu}>
                        Bloqlar
                    </Link>

                    <Link className='link' onClick={toggleMenu}>
                        Əlaqə
                    </Link>
                </div>

            </div>
            


        </div>
    )
}
export default Header