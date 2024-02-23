import './styles.scss'
import { Link } from 'react-router-dom';
import instaLogo  from '../../assets/images/insta-logo.svg'
import faceBookLogo from '../../assets/images/facebook-logo.svg'
import contactIcn from '../../assets/images/icn-contact.ico'
import { useEffect } from 'react';

function Contact(){
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return(
        <div className="contact-container">
            
                <h1>
                    Əlaqə
                </h1>
                <div className='details'>
                    <div className='info'>
                       <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur alias eos error eum, iusto doloremque officiis similique esse minus temporibus saepe quae enim iste excepturi doloribus nostrum illo quisquam optio.
                       </p>
                       <p>
                            Əlaqə nömrəsi: <span>+994XXXXXXXXX</span>
                       </p>
                       <p>
                            
                       </p>
                    </div>
                    <img src={contactIcn} alt="" />
                </div>
                <Link to='/courses' >
                    <button>Xidmətlərimiz</button>
                </Link>
            
            
                <div className='social-media-contact'>
                    
                    <p>
                        Sosial şəbəkələrdən bizi izləyə bilərsiniz:
                    </p>
                    <div className='medias'>
                        <a href="">
                            <img src={instaLogo} alt="" />     
                        </a>
                        <a href="">
                            <img src={faceBookLogo} alt="" />
                        </a>
                    </div>

                    
                </div>
            
        </div>
    )
}
export default Contact;