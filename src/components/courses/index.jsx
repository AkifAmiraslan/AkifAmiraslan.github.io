import nextRight from '../../assets/images/next-right.svg'
import Cart from '../common/cart';
import coursesData from '../../data/coursesData';
import './styles.scss'
import { useEffect } from 'react';


function Courses(){
    useEffect(() => {
        window.scroll(0,0)
    },[])
    return(
        <div className="courses-container">
            <div className="title">
                <p className='main'>Xidmətlərimiz</p>
                <p className='address'>
                    <span>Ana səhifə</span> 
                    <img src={nextRight} alt="" />
                    <span>Xidmətlərimiz</span>
                </p>
            </div>
            
            <div className='courses'>
                {coursesData.map((course, index) => (
                    <Cart
                        key={index}
                        title={course.title}
                        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint quis nam rem reiciendis soluta fugiat sed cum ab in."
                    />
                ))}
            </div>

            
        </div>
    )
}
export default Courses;