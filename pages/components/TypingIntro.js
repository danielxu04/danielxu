// libraries
import Typewriter from 'typewriter-effect';

function TypingIntro(){

    return (
        <div>

            <h1 className="font-montserratBold text-purple-800 purple-glow text-4xl xs:text-5xl md:text-7xl whitespace-pre-line">
                <Typewriter
                    options={{
                        loop: true,
                        deleteSpeed: "natural"
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Hi.<br>I'm Daniel.")
                        typewriter.pauseFor(100)
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(4000)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}
                />
            </h1>
        </div>
    );
}

export default TypingIntro;