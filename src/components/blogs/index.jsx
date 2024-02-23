import { useEffect } from "react";
import Blog from "./blog";
import './styles.scss';

function Blogs(){
    const sampleBlogData = {
        imgSrc: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?cs=srgb&dl=pexels-alexander-dummer-1912868.jpg&fm=jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis accusantium optio et aliquid vitae, earum veritatis soluta alias quidem fugiat rerum. Aspernatur, quam! Velit natus ad delectus inventore enim."
    };

    const renderBlogs = (count) => {
        const blogs = [];
        for (let i = 1; i < count + 1; i++) {
            blogs.push(
                <Blog
                    id={i} 
                    imgSrc={sampleBlogData.imgSrc} 
                    title={sampleBlogData.title} 
                    text={sampleBlogData.text} 
                />
            );
        }
        return blogs;
    };
    
    useEffect(() => {
        window.scroll(0,0)
    },[])
    return (
        <div className="blogs-container">
            <h1 className="title">
                Bloqlar
            </h1>
            <div className="blogs">
                {renderBlogs(8)} 
            </div>
        </div>
    );
}
export default Blogs;