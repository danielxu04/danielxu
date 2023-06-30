// libraries
import Typewriter from 'typewriter-effect';

// components
import { useContext } from 'react';
import { LightModeContext } from '../contexts/LightMode';

function TypingIntro(){

    const lightModeState = useContext(LightModeContext);

    return (
        <div className="text-center xl:text-left">
            <h1 className={`font-montserratBold text-4xl xs:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line transition-15
                ${lightModeState.isLightMode === 'light' ? 'text-purple-700 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}>
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