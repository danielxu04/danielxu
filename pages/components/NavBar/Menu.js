import MobileNavButton from "./MobileNavButton";
import Link from 'next/link'

function Menu(props){
    return (
        <div className={`flex bg-zinc-800 h-screen top-0 flex-col absolute z-30 pt-72 text-right left-0 w-screen transition ${props.click ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="pt-4 pb-4" onClick={() => props.setClick(prevClick => !prevClick)}>
                <Link href="#home"><MobileNavButton text="Home" id="#home"/></Link>
            </div>
            <div className="pt-4 pb-4" onClick={() => props.setClick(prevClick => !prevClick)}>
                <Link href="#aboutme" ><MobileNavButton text="Projects" id="#projects"/></Link>
            </div>
            <div className="pt-4 pb-4" onClick={() => props.setClick(prevClick => !prevClick)}>
                <Link href="#contact" ><MobileNavButton text="Contact" id="#contact"/></Link>
            </div>
            <div className="pt-4 pb-4" onClick={() => props.setClick(prevClick => !prevClick)}>
                <Link href="/resume/resume-master.pdf"><MobileNavButton text="Resume" id="#resume"/></Link>
            </div>
        </div>
    );
}

export default Menu;