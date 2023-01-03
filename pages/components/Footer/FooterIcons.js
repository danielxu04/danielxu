import Image from 'next/image';
import LinkedIn from '../../../public/icons/linkedin.svg';
import GitHub from '../../../public/icons/square-github.svg';
import Instagram from '../../../public/icons/square-instagram.svg';

function FooterIcons(){
    return (
        <div className="flex flex-row rounded pr-[10vw]">
            <a href="https://www.linkedin.com/in/daniel-xu-35a069241/" className="">
                <Image src={LinkedIn} alt="linkedin" className="filter-purple-300 inline-block ml-2 mb-2 w-7 hover:translate-y-[-0.2rem]"/>
            </a>
            <a href="https://github.com/danielxu04">
                <Image src={GitHub} alt="github" className="filter-purple-300 inline-block ml-2 mb-2 w-7 hover:translate-y-[-0.2rem]"/>
            </a>
            <a href="https://www.instagram.com/_daniel.xu_/">
                <Image src={Instagram} alt="instagram" className="filter-purple-300 inline-block ml-2 mb-2 w-7 hover:translate-y-[-0.2rem]"/>
            </a>
        </div>
    );
}

export default FooterIcons;