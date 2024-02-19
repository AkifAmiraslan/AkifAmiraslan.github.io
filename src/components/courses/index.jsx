import nextRight from '../../assets/images/next-right.svg'
import Course from './course';
import coursesData from '../../data/coursesData';
import './styles.scss'


function Courses(){
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
                    <Course
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