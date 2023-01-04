import {Link} from 'react-scroll';

import NavButton from "./NavButton";

function NavButtonContainer(){
    return (
        <ul className="flex flex-row rounded p-3 bg-transparent mt-2 mb-1">
            <li>
                <Link activeClass="active" to="home"><NavButton text="Home" id="#home"/></Link>
            </li>
            <li>
                <Link to="aboutme" ><NavButton text="Projects" id="#projects"/></Link>
            </li>
            <li>
                <Link to="contact" ><NavButton text="Contact" id="#contact"/></Link>
            </li>
            <li>
                <NavButton text="Resume" id="/resume/resume-master.pdf"/>
            </li>
        </ul>
    );
}

export default NavButtonContainer;