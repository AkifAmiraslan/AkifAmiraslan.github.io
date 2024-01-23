/* eslint-disable react/prop-types */
import './styles.scss'
function Blog(props){
    return(
        <div className="blog">
            <img src={props.imgSrc} alt="" />

            <h4 className="blog-title">
                {props.title}
            </h4>

            <p className="blog-text">
                {props.text}
            </p>

            
        </div>
    )
}
export default Blog;