// child components
import NavButtonContainer from "./NavButtonContainer";
import Logo from "./Logo";

// images
import Image from "next/image";
import hamburger from "../../../public/icons/bars-solid.svg";

function MobileNav(){
    return(
        <nav className="sm:w-screen bg-black px-3 py-3">
            <div className="sm:w-screen md:container mx-auto justify-between flex flex-wrap items-center">
                <Logo />
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-violet-500 rounded-lg md:hidden hover:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-500" aria-controls="navbar-default" aria-expanded="false">
                    <Image src={hamburger} alt="navbar-hamburger" className="filter-violet-600 w-6"/>
                </button>
                <div className="hidden md:block" id="navbar-default">
                    <NavButtonContainer />
                </div>
            </div>
        </nav>
    );
}

export default MoblieNav;