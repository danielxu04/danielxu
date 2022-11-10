// child components
import TypingIntro from "./TypingIntro";

function IntroContainer(){
    return (
        <div className="bg-black pt-6 flex flex-col w-screen md:flex-row">
            <div className="w-full md:w-1/2"></div>
            <div className="py-14 flex flex-col w-full items-center md:w-1/2 md:pt-56">
                <TypingIntro />
            </div>
        </div>
    );
}

export default IntroContainer;