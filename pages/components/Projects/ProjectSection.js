import {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import DesktopGlassCard from "./DesktopGlassCard";
import MobileGlassCard from "./MobileGlassCard";

function ProjectSection(){

    // initialize aos
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    // hyperlinks
    const expenseTrackerLink = "https://github.com/danielxu04/expense-tracker";
    const privilegeWalkLink = "https://github.com/danielxu04/privilege-walk";
    const codeManLink = "https://github.com/danielxu04/code-man";

    // languages and frameworks
    const expenseTrackerLF = "React.js, CSS";
    const privilegeWalkLF = "Next.js, Tailwind CSS, Firebase";
    const codeManLF = "Java";



    return (
        <div className="mb-[10vh]">
            <div className="flex flex-col center-items justify-center lg:hidden">
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Expense Tracker" 
                        tempNum='01'
                        description="An expense tracker web application programmed using React, including an expense graph to help users visualize their annual expenses, relative to
                        their monthly purchases."
                        linkTo = {expenseTrackerLink}
                        lf = {expenseTrackerLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Privilege Walk" 
                        tempNum='02'
                        description="An interactive Privilege Walk built with Next.js and Tailwind, a branch of the Discourse Agency
                        Website. A game-based exercise that helps users recognize various privileges in society."
                        linkTo = {privilegeWalkLink}
                        lf = {privilegeWalkLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="CodeMan" 
                        tempNum='03'
                        description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                        pixel art, game tiles, and a 70x60 tile world map."
                        linkTo = {codeManLink}
                        lf = {codeManLF}
                    />
                </div>
            </div>
            <div className="flex-col center-items justify-center hidden lg:flex lg:flex-row lg:pt-[6vh]">
                <DesktopGlassCard 
                    title="Expense Tracker" 
                    tempNum='01'
                    description="An expense tracker web application programmed using React, including an expense graph to help users visualize their annual expenses, relative to
                    their monthly purchases."
                    linkTo = {expenseTrackerLink}
                    lf = {expenseTrackerLF}
                />
                <DesktopGlassCard 
                    title="Privilege Walk" 
                    tempNum='02'
                    description="An interactive Privilege Walk built with Next.js and Tailwind, a branch of the Discourse Agency
                    Website. A game-based exercise that helps users recognize various privileges in society."
                    linkTo = {privilegeWalkLink}
                    lf = {privilegeWalkLF}
                />
                <DesktopGlassCard 
                    title="CodeMan" 
                    tempNum='03'
                    description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                    pixel art, game tiles, and a 70x60 tile world map."
                    linkTo = {codeManLink}
                    lf = {codeManLF}
                />
            </div>
        </div>
    );
}


export default ProjectSection;