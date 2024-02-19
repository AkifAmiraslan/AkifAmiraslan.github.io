

import { useParams } from 'react-router-dom';

function BlogDetailPage() {
    const { id } = useParams(); // :id parametresini alıyoruz
    const sampleBlogData = {
        imgSrc: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?cs=srgb&dl=pexels-alexander-dummer-1912868.jpg&fm=jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis accusantium optio et aliquid vitae, earum veritatis soluta alias quidem fugiat rerum. Aspernatur, quam! Velit natus ad delectus inventore enim."
    };
    // Burada id'ye göre blog detaylarını getirme işlemleri yapılabilir.

    return (
        <div className=''>
            <h2>{sampleBlogData.title}</h2>
            <p>
                Blog ID: {id}
                {sampleBlogData.text}
            </p>
            <img src={sampleBlogData.imgSrc} alt="" style={{ width: "500px" }}/>
            salam
        </div>
    );
}

export default BlogDetailPage;
