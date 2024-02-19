/* eslint-disable react/prop-types */
import { useState } from "react";
import plusIcon from '../../assets/images/+icon.svg'
import close from "../../assets/images/close-menu.svg"
function Course(props){
    const [infoVisible, setInfoVisible] = useState(false);

    const handleImageClick = () => {
        setInfoVisible(!infoVisible);
    };

    return(
        <div className="course">
            <div className="course-title">
                <h3>{props.title}</h3>
                {
                    infoVisible?(
                        <img src={close} alt="" onClick={handleImageClick} />
                    ):
                    (
                        <img src={plusIcon} alt="" onClick={handleImageClick} />
                    )
                }
            </div>
            
            {infoVisible && (
                <div className="course-info">
                    <p>{props.info}</p>
                </div>
            )}
        </div>
    );
}

export default Course;
