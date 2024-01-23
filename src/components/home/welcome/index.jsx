import './styles.scss'
import { Link } from 'react-router-dom';
function Welcome(){
    return(
        <div className="welcome-container">
            <h1 className="title">
                Kidland Academy-ə xoş gəlmişsiniz
            </h1>
            <div className="about">
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias quas tenetur repudiandae obcaecati 
                   quidem corrupti ad saepe officiis dignissimos, est nulla cumque culpa enim odit maiores, placeat, aut commodi
                    fuga nesciunt tempore porro perspiciatis. Qui omnis dolorum nesciunt enim dolor consectetur nobis, atque quas aperiam 
                    ullam. Molestiae rerum neque totam ullam perferendis quia, cumque fugit laudantium quidem at est minima vero 
                    perspiciatis! Voluptatibus ipsam nisi recusandae, quia doloribus aliquid delectus dolorum. Sint omnis non dolorum!
                     Veritatis numquam quisquam, soluta accusantium fugiat itaque est voluptatibus labore dolorum non excepturi maiores minima 
                     minus velit praesentium dolor veniam quam dolorem accusamus sit.
                </p>
                <img src="https://ed.stanford.edu/sites/default/files/news_images/kinder-small.jpg" alt="" />
            </div>
            <Link to=''>
                <button className="contact-btn">Əlaqə</button>
            </Link>
            
        </div>
    )
}
export default Welcome;