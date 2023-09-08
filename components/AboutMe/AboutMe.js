import IntroParagraph from './IntroParagraph';

function AboutMe(){
    return(
        <div className='flex flex-col center-items justify-center pt-[4vh] pb-[3vh] px-[5vw] md:px-[12vw] xl:pb-[2vh] xl:pt-[20vh] xl:px-[28vw]'>
            <IntroParagraph />
        </div>
    );
}

export default AboutMe;