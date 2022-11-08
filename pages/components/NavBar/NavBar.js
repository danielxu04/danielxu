import NavButton from "./NavButton";
import Image from "next/image";

import codeLogo from "../../../public/icons/code.svg";

function NavBar(){

    return (
        <nav className="bg-black px-3 py-3">
            <div className="container mx-auto justify-between flex flex-wrap items-center">

                <div className="w-20">
                    <div className="inline">
                        <h1 className="font-robotoMonoBold text-violet-500 text-2xl">DX</h1>
                        <Image src={codeLogo} alt="code-logo" className="filter-violet-500"/>
                    </div>
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