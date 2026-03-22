import star from "../assets/icon-star.svg";
import items from "../data";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

function Accordion() {
    return (
        <div className="accordion">
            <div className="title">
                <img 
                    src={ star }
                    alt="icon statr"
                />
                <h2>FAQs</h2>
            </div>

            <div className="listItem">
                {items.map((item) => (
                    <AccordionItem
                        key={ item.id } 
                    >
                        {item}
                    </AccordionItem>
                ))}
            </div>





        </div>
    );
}

export default Accordion;