import IntroParagraph from './IntroParagraph';

function AboutMe(){
    return(
        <div className='flex flex-col center-items justify-center pt-[4vh] pb-[5vh] px-[5vw] md:pt-[20vh] md:px-[30vw] md:pb-[10vh]'>
            <IntroParagraph />
        </div>
    );
}

export default AboutMe;