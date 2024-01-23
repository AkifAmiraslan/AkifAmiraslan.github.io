import './styles.scss'
//photos
import brainImg from '../../../assets/images/brain.svg'
import improveImg from '../../../assets/images/improve.svg'
import voiceImg from '../../../assets/images/voice.svg'
import kindergarten from '../../../assets/images/kindergarten.svg'
function WhyWe(){
    return(
        <div className="why-we-container">
            <div className="title">
                Nə üçün biz?
            </div>
            <p className="info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae impedit error maiores? Expedita cupiditate dicta dolor reprehenderit. Nemo reprehenderit impedit corrupti magnam assumenda debitis minus magni dolor a, incidunt odit cupiditate quis dolores animi voluptates vero sint quas rerum. Commodi cupiditate praesentium quibusdam deserunt consectetur nostrum harum. Maxime, laudantium!
            </p>
            <div className='photos'>
                <img src={brainImg} alt="" />lorem
                <img src={kindergarten} alt="" />lorem
                <img src={improveImg} alt="" />lorem
                <img src={voiceImg} alt="" />lorem
                
            </div>
        </div>
    )
}
export default WhyWe;