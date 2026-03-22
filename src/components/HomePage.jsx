import bg from "../assets/bg.svg";
import Accordion from "./Accordion";
import "./HomePage.css";


function HomePage() {
    return (
        <div className="home">
            <div className="header">
                <img 
                    src={ bg }
                    alt="header image"
                />
            </div>

            <Accordion></Accordion>
        </div>
    );
}

export default HomePage;