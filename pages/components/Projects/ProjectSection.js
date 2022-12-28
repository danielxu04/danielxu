import DesktopGlassCard from "./DesktopGlassCard";
import MobileGlassCard from "./MobileGlassCard";

function ProjectSection(){
    return (
        <div className="">
            <div className="flex flex-col center-items justify-center md:px-[6vw] lg:hidden">
                <MobileGlassCard 
                    title="Expense Tracker" 
                    tempNum='01'
                    description=""
                />
                <MobileGlassCard 
                    title="Privilege Walk" 
                    tempNum='02'
                />
                <MobileGlassCard 
                    title="CodeMan" 
                    tempNum='03'
                />
            </div>
            <div className="flex-col center-items justify-center hidden lg:flex lg:flex-row lg:pt-[6vh]">
                <DesktopGlassCard 
                    title="Expense Tracker" 
                    tempNum='01'
                />
                <DesktopGlassCard 
                    title="Privilege Walk" 
                    tempNum='02'
                />
                <DesktopGlassCard 
                    title="CodeMan" 
                    tempNum='03'
                />
            </div>
        </div>
    );
}


export default ProjectSection;