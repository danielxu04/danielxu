import Image from 'next/image';

import TypingIntro from "./TypingIntro";
import DanielPicture from '../../public/images/danielpicture.jpg';

function IntroContainer(){
    return (
        <div id="home" className="z-32 bg-transparent pt-6 flex flex-col w-screen md:flex-row">
            <div className="pt-[8vh] z-28 items-center flex flex-col w-full md:w-1/2 md:pt-[8vh] lg:pt-[15vh]">
                <div className="picture-box w-51VW h-51VW md:w-29VW md:h-29VW px-2">
                    <Image src={DanielPicture} alt="daniel-picture" className='rounded-xl w-[50vw] md:w-[28vw] block mh-auto'/>
                </div>
            </div>
            <div className="py-14 flex flex-col w-full items-center pt-[10vh] md:w-1/2 md:pt-[14vh] md:pr-4 lg:pt-[30vh] lg:pr-10">
                <TypingIntro />
            </div>
        </div>
    );
}

export default IntroContainer;