import { useEffect } from "react";
import faqData from "../../data/faqData";
import Cart from '../common/cart'
import './styles.scss'
function Faq(){
    useEffect(() => {
        window.scroll(0,0)
    },[])
    return(
        <div className="faq-container">
            <h1>
                Tez-tez verilən suallar
            </h1>
            <div className="faq">
                {faqData.map((question, index) => (
                    <Cart
                        key={index}
                        title={question.title}
                        info="Sualların cavabı tezliklə yerləşdiriləcək"
                    />
                ))}
            </div>
        </div>
    )
}
export default Faq;