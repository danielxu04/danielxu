import DesktopGlassCard from "./DesktopGlassCard";
import MobileGlassCard from "./MobileGlassCard";

function ProjectSection(){

    const expenseTrackerLink = "https://github.com/danielxu04/expense-tracker";
    const privilegeWalkLink = "https://github.com/danielxu04/privilege-walk";
    const codeManLink = "https://github.com/danielxu04/code-man";

    return (
        <div className="">
            <div className="flex flex-col center-items justify-center md:px-[6vw] lg:hidden">
                <MobileGlassCard 
                    title="Expense Tracker" 
                    tempNum='01'
                    description="An expense tracker web application programmed using React, helping users visualize their annual expenses, relative to
                    their monthly purchases."
                    linkTo = {expenseTrackerLink}
                />
                <MobileGlassCard 
                    title="Privilege Walk" 
                    tempNum='02'
                    description="An interactive Privilege Walk built with Next.js and Tailwind, a branch of the Discourse Agency
                    Website. A game-based exercise designed to help users recognize various sorts of privilege within society."
                    linkTo = {privilegeWalkLink}
                />
                <MobileGlassCard 
                    title="CodeMan" 
                    tempNum='03'
                    description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                    pixel art, game tiles, and a 70x60 tile world map."
                    linkTo = {codeManLink}
                />
            </div>
            <div className="flex-col center-items justify-center hidden lg:flex lg:flex-row lg:pt-[6vh]">
                <DesktopGlassCard 
                    title="Expense Tracker" 
                    tempNum='01'
                    description="An expense tracker web application programmed using React, helping users visualize their annual expenses, relative to
                    their monthly purchases."
                    linkTo = {expenseTrackerLink}
                />
                <DesktopGlassCard 
                    title="Privilege Walk" 
                    tempNum='02'
                    description="An interactive Privilege Walk built with Next.js and Tailwind, a branch of the Discourse Agency
                    Website. A game-based exercise designed to help users recognize various sorts of privilege within society."
                    linkTo = {privilegeWalkLink}
                />
                <DesktopGlassCard 
                    title="CodeMan" 
                    tempNum='03'
                    description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                    pixel art, game tiles, and a 70x60 tile world map."
                    linkTo = {codeManLink}
                />
            </div>
        </div>
    );
}


export default ProjectSection;