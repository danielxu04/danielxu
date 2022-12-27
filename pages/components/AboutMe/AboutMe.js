import IntroParagraph from './IntroParagraph';

function AboutMe(){
    return(
        <div className='flex flex-col center-items justify-center pt-[4vh] pb-[5vh] px-[5vw] md:px-[12vw] md:pb-[10vh] lg:pt-[20vh] lg:px-[30vw]'>
            <IntroParagraph />
        </div>
    );
}

export default AboutMe;