import DesktopGlassCard from "./DesktopGlassCard";
import MobileGlassCard from "./MobileGlassCard";

function ProjectSection(){
    return (
        <div className="">
            <div className="flex flex-col center-items justify-center md:px-[6vw] lg:hidden">
                <MobileGlassCard />
                <MobileGlassCard />
                <MobileGlassCard />
            </div>
            <div className="flex-col center-items justify-center hidden lg:flex lg:flex-row">
                <DesktopGlassCard />
                <DesktopGlassCard />
                <DesktopGlassCard />
            </div>
        </div>
    );
}


export default ProjectSection;