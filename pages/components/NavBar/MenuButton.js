// images
import Image from "next/image";
import hamburger from "../../../public/icons/bars-solid.svg";

function MenuButton(props){
    
    return(
        <div className="z-50 pr-5 pt-3">
            <button type="button" onClick={() => props.setClick(prevClick => !prevClick)} className="inline-flex items-center p-2 ml-3 text-sm text-violet-500 rounded-lg md:hidden hover:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-500" aria-controls="navbar-default" aria-expanded="false">
                <Image src={hamburger} alt="navbar-hamburger" className="filter-violet-600 w-6"/>
            </button>
        </div>

    );
}

export default MenuButton;