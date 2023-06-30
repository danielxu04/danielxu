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
            
            <br /><br />I&apos;m super passionate about programming and mathematics, in various areas such as Quantitative Finance, Web Development, Data Science, Deep Learning, and Computer Vision.

            <br /><br />Currently, I&apos;m a Web Developer at 
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-blue-300 purple-glow' : 'text-blue-600 blackberry-glow'}`}> BlackBerry,</strong> and I&apos;m in charge of leveraging a versatile tech stack,
            consisting of 
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> AEM,</strong>
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> TypeScript,</strong>
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> JavaScript,</strong>
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> Java,</strong>
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> Git,</strong> and
            <strong className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}> XML/HTL/SASS </strong> to author page updates, and deploy self-developed pages to production.

            <br /><br />When I&apos;m not coding, you&apos;ll find me playing piano, playing basketball, doing math, watching K-Dramas and Anime, or hanging out with friends.

            <br /><br />I love <strong id="aboutme" className={`transition-15 ${lightModeState.isLightMode === 'light' ? 'text-purple-300 purple-glow' : 'text-fuchsia-700 light-purple-glow'}`}>learning</strong> about new technologies, and building projects to bring my ideas to life. 
            
            <br /><br />Here&apos;s some of my work:
        </p>
    );
}

export default IntroParagraph;  