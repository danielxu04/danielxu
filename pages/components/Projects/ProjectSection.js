import DesktopGlassCard from "./DesktopGlassCard";
import MobileGlassCard from "./MobileGlassCard";

function ProjectSection(){
    return (
        <div className="">
            <div className="flex flex-col center-items justify-center md:hidden">
                <MobileGlassCard />
                <MobileGlassCard />
                <MobileGlassCard />
            </div>
            <div className="flex-col center-items justify-center hidden md:flex md:flex-row">
                <DesktopGlassCard />
                <DesktopGlassCard />
                <DesktopGlassCard />
            </div>
        </div>
    );
}


export default ProjectSection;