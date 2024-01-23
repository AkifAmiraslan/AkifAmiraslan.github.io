import './styles.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function EducationMethod(){
    return(
        <div className="education-method-container">
            <h1 className='title'>
                Təhsil metodumuz
            </h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum tempora magni 
                sapiente praesentium deleniti non maiores. Excepturi at quam animi eum qui eaque error nobis 
                voluptatibus minima ipsum odit expedita veritatis voluptate aliquam omnis minus beatae ducimus, 
                architecto dolor commodi repellendus? Commodi quis, eveniet perspiciatis molestias ipsum consectetur 
                nostrum, ut placeat praesentium inventore autem necessitatibus cumque blanditiis! Aliquam modi iure 
                doloribus possimus beatae assumenda aspernatur dolorum deleniti perspiciatis libero?
            </p>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    500:{
                        slidesPerView:1.5,
                        spaceBetween:10,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="https://cdn.firstcry.com/education/2022/12/08180232/Typical-Kindergarten-Schedule.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?cs=srgb&dl=pexels-naomi-shi-1001914.jpg&fm=jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/4090006/pexels-photo-4090006.jpeg?cs=srgb&dl=pexels-natalie-bond-4090006.jpg&fm=jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://epe.brightspotcdn.com/5a/ee/cd3fb9bd43888c9bf06931f9ab58/072523-kindergarten-class-ap-bs.jpg" alt="" /></SwiperSlide>
                
            </Swiper>

        </div>
    )
}
export default EducationMethod;