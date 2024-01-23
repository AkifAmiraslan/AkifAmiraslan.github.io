import callIcn from '../../assets/images/phoneCall-logo.svg'
import gmailIcn from '../../assets/images/mail-logo.svg'
import './styles.scss'
function Footer(){
    return(
        <div className="footer-container">
            <div className='footer-information'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aut ut minima aliquam cumque, fuga blanditiis tempora vero suscipit assumenda!
                </p>
                
            </div>

            <div className='footer-links'>

                <div className='links-title'>
                    Keçidlər
                </div>

                <div className='links'>
                    <div>Kurslar</div>
                    <div>Bloqlar</div>
                    <div>Əlaqə</div>
                </div>
                
            </div>

            <div className='footer-contact'>
                <button className='questions-btn'>
                    Tez-tez verilən suallar
                </button>

                <div className='location'>
                    <img src="" alt="" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolores provident laudantium saepe voluptate nihil, esse dolore consequatur qui minus eum.
                </div>

                <div className='call-numbers'>
                    <img src={callIcn} alt="" />
                    +994 XX XXX XX XX
                </div>

                <div className='gmail'>
                    <img src={gmailIcn} alt="" />
                    example@gmail.com
                </div>
                
            </div>
        </div>
    )
}
export default Footer;