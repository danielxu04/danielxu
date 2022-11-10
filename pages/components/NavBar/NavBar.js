// child components
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function NavBar(){

    return (
        <div>
            <DesktopNav />
            <MobileNav />
        </div>
    );
}

export default NavBar;