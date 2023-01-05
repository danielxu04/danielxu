import Image from 'next/image';
import LinkedIn from '../../../public/icons/linkedin.svg';
import GitHub from '../../../public/icons/square-github.svg';
import Instagram from '../../../public/icons/square-instagram.svg';

function FooterIcons(){
    return (
        <ul className="flex flex-row rounded xl:pr-[34vw]">
            <li className="px-4 xl:px-1">
                <a href="https://www.linkedin.com/in/daniel-xu-35a069241/" className="icon-box-shadow">
                    <Image src={LinkedIn} alt="linkedin" className="filter-purple-800 opacity-70 inline-block ml-2 mb-2 w-7 hover:translate-y-[-0.25vh] hover:opacity-100 footer-icon"/>
                </a>
            </li>
            <li className="px-4 xl:px-1">
                <a href="https://github.com/danielxu04" className="icon-box-shadow">
                    <Image src={GitHub} alt="github" className="filter-purple-800 opacity-70 inline-block ml-2 mb-2 w-7 hover:translate-y-[-0.25vh] hover:opacity-100 footer-icon"/>
                </a>
            </li>
            <li className="px-4 xl:px-1">
                <a href="https://www.instagram.com/_daniel.xu_/" className="icon-box-shadow">
                    <Image src={Instagram} alt="instagram" className="filter-purple-800 opacity-70 inline-block ml-2 mb-2 w-7 hover:translate-y-[-0.25vh] hover:opacity-100 footer-icon"/>
                </a>
            </li>
        </ul>
    );
}

export default FooterIcons;