import NavButton from "./NavButton";

import logo from "../images/daniel-xu-logo.png";

function NavBar(){
    return (
        <nav className="bg-zinc-900 border-indigo-200 borderx-indigo-500 px-3 py-3">
            <div className="container mx-auto justify-between flex flex-wrap items-center">
                <img src={logo} alt="daniel-xu-logo" className="h-10 w-10"></img>

                <div className="hidden w-full">
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