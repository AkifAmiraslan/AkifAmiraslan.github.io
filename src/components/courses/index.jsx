import nextRight from '../../assets/images/next-right.svg'
import Course from './course';
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
                <Course
                    title='Mini bağça'
                    
                    info="wesdfawsdf"
                />
                <Course
                    title='Məktəbəqədər və erkən inkişaf'
                    
                />
                <Course
                    title='Məktəb dərslərinin hazırlığı'
                    
                />
                <Course
                    title='İbtidai sinif hazırlığı'
                    
                />
                <Course
                    title='Abituriyent hazırlığı'
                    
                />
                <Course
                    title='Psixologiya və nitq inkişafı'
                    
                />
                <Course
                    title='Loqaped'
                    
                />
                <Course
                    title='Məntiq və zəka dərsləri'
                    
                />
                <Course
                    title='Mental arifmetika'
                    
                />
                <Course
                    title='İngilis dili'
                    
                />
                <Course
                    title='Rus dili'
                    
                />
                <Course
                    title='Alman dili'
                    
                />
                <Course
                    title='Ausbildung'
                    
                />
                <Course
                    title='Ərəb dili'
                    
                />
                <Course
                    title='Rəsm dərsləri'
                    
                />
                <Course
                    title='Şahmat dərsləri'
                    
                />
            </div>
        </div>
    )
}
export default Courses;