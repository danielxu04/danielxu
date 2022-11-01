import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import NavButton from "./NavButton";

import Image from 'next/image';

import Logo from '../../public/images/daniel-xu-logo.jpg';

function NavBar(){

    return (
        <nav className="bg-zinc-900 border-indigo-200 borderx-indigo-500 px-3 py-3">
            <div className="container mx-auto justify-between flex flex-wrap items-center">

                <div className="w-20">
                    <Image src={Logo} alt="daniel-xu-logo"/>
                </div>


                <div className="w-full">
                    <ul className="flex flex-col rounded bg-zinc-900 mt-2 mb-1">
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