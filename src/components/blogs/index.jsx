import Blog from "./blog";
import './styles.scss'
function Blogs(){
    return(
        <div className="blogs-container">
            <h1 className="title">
                Bloqlar
            </h1>
              
            <div className="blogs">
                <Blog
                    imgSrc="https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?cs=srgb&dl=pexels-alexander-dummer-1912868.jpg&fm=jpg"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis accusantium optio et aliquid vitae, earum veritatis soluta alias quidem fugiat rerum. Aspernatur, quam! Velit natus ad delectus inventore enim."
                />
            </div>
            
            
        </div>  
    )
}
export default Blogs;