import NavButton from "./NavButton";
import Image from "next/image";

import codeLogo from "../../../public/icons/code-solid.svg";
import hamburger from "../../../public/icons/bars-solid.svg";

function NavBar(){

    return (
        <nav className="sm:w-screen bg-black px-3 py-3">
            <div className="sm:w-screen md:container mx-auto justify-between flex flex-wrap items-center">

                <div>
                    <div className="sm:pl-4">
                        <h1 className="font-robotoMonoBold text-violet-500 text-2xl inline-block">DX</h1>
                        <Image src={codeLogo} alt="code-logo" className="filter-violet-500 inline-block ml-2 pb-2 w-7"/>
                    </div>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-violet-500 rounded-lg md:hidden hover:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-500" aria-controls="navbar-default" aria-expanded="false">
                    <Image src={hamburger} alt="navbar-hamburger" className="filter-violet-600 w-6"/>
                </button>
                <div className="hidden md:block" id="navbar-default">
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