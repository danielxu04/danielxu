// child components
import Image from 'next/image';

import TypingIntro from "./TypingIntro";
import DanielPicture from '../../public/images/danielpicture.jpg';
import BoxesDesktop from "./BoxDesign/BoxesDesktop";

function IntroContainer(){
    return (
        <div className="bg-transparent pt-6 flex flex-col w-screen md:flex-row">
            <div className="w-full md:w-1/2">
                <Image src={DanielPicture} alt="daniel-picture" className='glassmorphism'/>
            </div>
            <div className="py-14 flex flex-col w-full items-center md:w-1/2 md:pt-[28vh] pr-8">
                <TypingIntro />
            </div>
        </div>
    );
}

export default IntroContainer;