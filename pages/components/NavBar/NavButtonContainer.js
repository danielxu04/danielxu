import NavButton from "./NavButton";

function NavButtonContainer(){
    return (
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
    );
}

export default NavButtonContainer;