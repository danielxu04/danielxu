import NavButton from "./NavButton";

function Menu(props){
    return (
        <div className={`flex bg-zinc-800 h-screen top-0 flex-col absolute z-30 pt-72 text-right left-0 w-screen transition ${props.click ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="pt-4 pb-4"><NavButton text="Home" id="#home"/></div>
            <div className="pt-4 pb-4"><NavButton text="Projects" id="#projects"/></div>
            <div className="pt-4 pb-4"><NavButton text="Contact" id="#contact"/></div>
        </div>
    );
}

export default Menu;