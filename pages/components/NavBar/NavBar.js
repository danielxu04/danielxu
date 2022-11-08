import NavButton from "./NavButton";
import Image from 'next/image';

import Logo from '../../../public/images/daniel-xu-logo.jpg';

function NavBar(){

    return (
        <nav className="bg-black px-3 py-3">
            <div className="container mx-auto justify-between flex flex-wrap items-center">

                <div className="w-20">
                    <Image src={Logo} alt="daniel-xu-logo" className="pl-4"/>
                </div>


                <div >
                    <ul className="flex flex-row rounded p-4 bg-black mt-2 mb-1">
                        <li>
                            <NavButton text="Home" id="#home"/>
                        </li>
                        <li>
                            <NavButton text="Projects" id="#projects"/>
                        </li>
                        <li>
                            <NavButton text="Contact" id="#contact"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;