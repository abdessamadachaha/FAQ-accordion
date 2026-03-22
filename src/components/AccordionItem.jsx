import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import "./AccordionItem.css";
import { useState } from "react";

function AccordionItem({ children }) {
    const [isOpen, setisOpen] = useState(false);

    function handleClick () {
        setisOpen(prev => !prev);
    }

    return (
        <div    
            className="accordionItem"
            onClick={handleClick}
        >
            <div>
                <p>{children.question}</p>
                <img 
                    src={isOpen ? minus : plus} 
                    alt="" 
                />
            </div>
            <p style={isOpen ? {} : {display: "none"}}>
                {children.answer}
            </p>
        </div>
    );

}

export default AccordionItem;