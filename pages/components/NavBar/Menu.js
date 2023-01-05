import NavButton from "./NavButton";
import { Link } from 'react-scroll';

function Menu(props){
    return (
        <div className={`flex bg-zinc-800 h-screen top-0 flex-col absolute z-30 pt-72 text-right left-0 w-screen transition ${props.click ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="pt-4 pb-4">
                <Link activeClass="active" to="home"><NavButton text="Home" id="#home"/></Link>
            </div>
            <div className="pt-4 pb-4">
                <Link to="aboutme" ><NavButton text="Projects" id="#projects"/></Link>
            </div>
            <div className="pt-4 pb-4">
                <Link to="contact" ><NavButton text="Contact" id="#contact"/></Link>
            </div>
            <div className="pt-4 pb-4"><NavButton text="Resume" id="danielxu04.github.io/resume/resume-master.pdf"/></div>
        </div>
    );
}

export default Menu;