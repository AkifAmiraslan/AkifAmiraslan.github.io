import { useParams } from 'react-router-dom'
import './styles.scss'
import { useEffect } from 'react';
function BlogDetail(){
    const { id } = useParams(); 
    const sampleBlogData = {
        imgSrc: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?cs=srgb&dl=pexels-alexander-dummer-1912868.jpg&fm=jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis accusantium optio et aliquid vitae, earum veritatis soluta alias quidem fugiat rerum. Aspernatur, quam! Velit natus ad delectus inventore enim."
    };
    useEffect(()=>{
        window.scroll(0,0);
    },[])
    return(
        <div className='blog-details-container'>
            <h2>{sampleBlogData.title}</h2>
            <p>
                Blog ID: {id}
                {sampleBlogData.text}
            </p>
            <img src={sampleBlogData.imgSrc} alt="" />
            
        </div>
    )
}
export default BlogDetail;