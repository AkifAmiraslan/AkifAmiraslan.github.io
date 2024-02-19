/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Blog({ id, imgSrc, title, text }) {
    return (
        <div className="blog">
            <Link to={`/blogs/${id}`}> 
                <img src={imgSrc} alt={title} />
                <h2>{title}</h2>
                <p>{text}</p>
            </Link>
        </div>
    );
}

export default Blog;
