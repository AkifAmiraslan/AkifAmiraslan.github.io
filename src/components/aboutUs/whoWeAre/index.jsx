import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './styles.scss'
function AboutUs(){
    return(
        <div className="about-us-container">
            <h1 className="title">
                Biz Kimik?
            </h1>

            <div className="info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, quidem? Fuga voluptate eos consectetur porro libero tenetur illo, quia laborum eaque distinctio, quo earum, enim sit fugit vero suscipit eligendi! Architecto porro fugiat, alias deserunt officia iusto. Alias aperiam dolor facilis reiciendis. Illo earum eligendi recusandae, sint eius at reprehenderit?
            </div>
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
export default AboutUs;