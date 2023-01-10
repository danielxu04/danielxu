import Link from 'next/link';

import DesktopNavButton from "./DesktopNavButton";

function NavButtonContainer(){
    return (
        <ul className="flex flex-row rounded p-3 bg-transparent mt-2 mb-1">
            <li>
                <Link href="#home"><DesktopNavButton text="Home" id="#home"/></Link>
            </li>
            <li>
                <Link href="#aboutme" ><DesktopNavButton text="Projects" id="#projects"/></Link>
            </li>
            <li>
                <Link href="#contact" ><DesktopNavButton text="Contact" id="#contact"/></Link>
            </li>
            <li>
                <Link href="/resume/resume-master.pdf"><DesktopNavButton text="Resume" /></Link>
            </li>
        </ul>
    );
}

export default NavButtonContainer;