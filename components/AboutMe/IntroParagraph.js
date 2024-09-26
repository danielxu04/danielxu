import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightMode";

function IntroParagraph(){

    const lightModeState = useContext(LightModeContext);

    return (
        <p className={`text-center xl:text-left font-montserratRegular text-md md:text-lg transition-15
        ${lightModeState.isLightMode === 'light' ? 'text-purple-200' : 'text-fuchsia-700'}`}>
            Hi! I&apos;m Daniel Xu, a <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}>Computer Science</strong> student at the 
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> University of Waterloo.
            </strong> 
            <br /><br />I&apos;m working towards a triple-major in 
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> Computer Science, </strong>
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}>
                Combinatorics & Optimization, </strong>and
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> Pure Mathematics.</strong>
            <div className="hidden">In my current school term, I am taking 6 courses: Intro to Optimization (Advanced), Statistics (Advanced), Foundations of Sequential Programs, Computer Organization and Design, Physics I, and Korean!</div>

            <br /><br />Formerly, I worked as a 
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> Quant Analyst </strong> on the prime brokerage desk
             at 
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-green-300 purple-glow' : 'text-green-500 blackberry-glow'}`}> HOOPP</strong>
            , and as a Software Engineer
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-blue-300 purple-glow' : 'text-blue-600 blackberry-glow'}`}> BlackBerry</strong>.


            <br /><br />I love <strong id="aboutme" className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}>learning</strong> about new technologies, and building projects to bring my ideas to life. 
            
            <br /><br />Here&apos;s some of my work:
        </p>
    );
}

export default IntroParagraph;  