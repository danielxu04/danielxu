import NavButton from "./NavButton";

function Menu(){
    return (
        <div className="flex flex-col absolute z-30 top-0 left-0 w-screen translate-x-full">
            <NavButton text="Home" id="#home"/>
            <NavButton text="Projects" id="#projects"/>
            <NavButton text="Contact" id="#contact"/>
        </div>
    );
}

export default Menu;