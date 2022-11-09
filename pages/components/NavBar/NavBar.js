// child components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function NavBar(){

    return (
        <div className="pt-2">
            <DesktopNav />
            <MobileNav />
        </div>
    );
}

export default NavBar;