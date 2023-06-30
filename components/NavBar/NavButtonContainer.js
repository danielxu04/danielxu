import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import Sun from '../../public/icons/sun.svg';
import Moon from '../../public/icons/moon.svg';
import { LightModeContext } from '../../contexts/LightMode';
import DesktopNavButton from "./DesktopNavButton";

function NavButtonContainer(){

    const lightModeState = useContext(LightModeContext);

    return (
        <ul className="flex flex-row rounded p-3 bg-transparent mt-2 mb-1 items-center">
            <li>
                <Link href="#home"><DesktopNavButton text="Home" id="#home"/></Link>
            </li>
            <li>
                <Link href="#aboutme" ><DesktopNavButton text="Projects" id="#projects"/></Link>
            </li>
            <li>
                <Link href="#contact" ><DesktopNavButton text="Contact" id="#contact"/></Link>
            </li>
            <li>
                <Link href="/resume/resume-master.pdf"><DesktopNavButton text="Resume" /></Link>
            </li>
            <li>
                <div className="flex justify-center items-center relative ml-4 mr-3">
                    <Image 
                        src={Sun} 
                        alt="sun" 
                        width={25} 
                        height={30} 
                        className={`z-[99] hover:scale-110 hover:cursor-pointer transition-075
                            ${lightModeState.isLightMode === 'light' ? 'nav-icon filter-purple-600 opacity-100' : 'light-nav-icon filter-fuchsia-600 opacity-0 hidden'}`}
                        onClick={lightModeState.changeDisplayMode}
                    />
                    <Image 
                        src={Moon} 
                        alt="moon" 
                        width={20} 
                        height={20} 
                        className={`z-[99] hover:scale-110 hover:cursor-pointer transition-075
                            ${lightModeState.isLightMode === 'light' ? 'nav-icon filter-purple-600 opacity-0 hidden' : 'light-nav-icon filter-fuchsia-600 opacity-100'}`}
                        onClick={lightModeState.changeDisplayMode}
                    />
                </div>
            </li>
        </ul>
    );
}

export default NavButtonContainer;