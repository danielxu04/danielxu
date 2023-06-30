import Image from 'next/image';
import LinkedIn from '../../public/icons/linkedin.svg';
import GitHub from '../../public/icons/square-github.svg';
import Instagram from '../../public/icons/square-instagram.svg';
import { useContext } from 'react';
import { LightModeContext } from '../../contexts/LightMode';

function FooterIcons(){

    const lightModeState = useContext(LightModeContext);

    return (
        <ul className="flex flex-row rounded">
            <li className="px-4 xl:px-1">
                <a 
                    href="https://www.linkedin.com/in/daniel-xu-35a069241/" 
                    className={`${lightModeState.isLightMode === 'light' ? 'icon-box-shadow' : 'light-icon-box-shadow'}`} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <Image 
                        src={LinkedIn} 
                        alt="linkedin" 
                        className={`opacity-70 inline-block ml-2 mb-2 w-6 2xs:w-7 hover:translate-y-[-0.25vh] hover:opacity-100 footer-icon
                        ${lightModeState.isLightMode === 'light' ? 'filter-purple-800' : 'filter-fuchsia-600 '}`}/>
                </a>
            </li>
            <li className="px-4 xl:px-1">
                <a 
                    href="https://github.com/danielxu04" 
                    className={`${lightModeState.isLightMode === 'light' ? 'icon-box-shadow' : 'light-icon-box-shadow'}`}
                    target="_blank" 
                    rel="noreferrer"
                >
                    <Image 
                        src={GitHub} 
                        alt="github" 
                        className={`opacity-70 inline-block ml-2 mb-2 w-6 2xs:w-7 hover:translate-y-[-0.25vh] hover:opacity-100 footer-icon
                        ${lightModeState.isLightMode === 'light' ? 'filter-purple-800' : 'filter-fuchsia-600 '}`}/>
                </a>
            </li>
            <li className="px-4 xl:px-1">
                <a 
                    href="https://www.instagram.com/_daniel.xu_/" 
                    className={`${lightModeState.isLightMode === 'light' ? 'icon-box-shadow' : 'light-icon-box-shadow'}`} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <Image 
                        src={Instagram} 
                        alt="instagram" 
                        className={`opacity-70 inline-block ml-2 mb-2 w-6 2xs:w-7 hover:translate-y-[-0.25vh] hover:opacity-100 footer-icon
                        ${lightModeState.isLightMode === 'light' ? 'filter-purple-800' : 'filter-fuchsia-600 '}`}/>
                </a>
            </li>
        </ul>
    );
}

export default FooterIcons;