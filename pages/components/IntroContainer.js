// child components
import Image from 'next/image';

import TypingIntro from "./TypingIntro";
import DanielPicture from '../../public/images/danielpicture.jpg';

function IntroContainer(){
    return (
        <div className="z-29 bg-transparent pt-6 flex flex-col w-screen md:flex-row">
            <div className="pt-[5vh] md:pt-[15vh] flex flex-col w-full md:w-1/2 z-29 items-center">
                <div className="box">
                    <Image src={DanielPicture} alt="daniel-picture" className='rounded-xl w-[50vw] md:w-[30vw] block mh-auto'/>
                </div>
            </div>
            <div className="py-14 flex flex-col w-full items-center md:w-1/2 md:pt-[28vh]">
                <TypingIntro />
            </div>
        </div>
    );
}

export default IntroContainer;