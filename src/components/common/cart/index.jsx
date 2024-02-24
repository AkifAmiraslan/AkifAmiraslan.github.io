/* eslint-disable react/prop-types */
import { useState } from "react";
import plusIcon from '../../../assets/images/+icon.svg'
import close from "../../../assets/images/close-menu.svg"
import './styles.scss'
function Cart(props){
    const [infoVisible, setInfoVisible] = useState(false);

    const handleImageClick = () => {
        setInfoVisible(!infoVisible);
    };

    return(
        <div className="cart">
            <div className="cart-title">
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
                <div className="cart-info">
                    <p>{props.info}</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
