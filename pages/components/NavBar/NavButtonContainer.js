import Link from 'next/link';

import NavButton from "./NavButton";

function NavButtonContainer(){
    return (
        <ul className="flex flex-row rounded p-3 bg-transparent mt-2 mb-1">
            <li>
                <Link href="#home"><NavButton text="Home" id="#home"/></Link>
            </li>
            <li>
                <Link href="#aboutme" ><NavButton text="Projects" id="#projects"/></Link>
            </li>
            <li>
                <Link href="#contact" ><NavButton text="Contact" id="#contact"/></Link>
            </li>
            <li>
                <Link href="/resume/resume-master.pdf"><NavButton text="Resume" /></Link>
            </li>
        </ul>
    );
}

export default NavButtonContainer;