import Image from 'next/image';

import TypingIntro from "./TypingIntro";
import DanielPicture from '../public/images/danielpicture.jpg';

function IntroContainer(){
    return (
        <div id="home" className="z-32 bg-transparent pt-6 flex flex-col w-screen xl:flex-row">
            <div className="pt-[8vh] z-28 items-center flex flex-col w-full xl:w-1/2 md:pt-[8vh] xl:pt-[15vh]">
                <div className="picture-box w-[65vw] h-[65vw] md:w-29VW md:h-29VW px-2">
                    <Image src={DanielPicture} alt="daniel-picture" className='rounded-xl w-[65vw] md:w-[28vw] block mh-auto'/>
                </div>
            </div>
            <div className="py-14 flex flex-col w-full md:pr-4 items-center pt-[10vh] xl:pr-10 xl:w-1/2 xl:pt-[30vh]">
                <TypingIntro />
            </div>
        </div>
    );
}

export default IntroContainer;