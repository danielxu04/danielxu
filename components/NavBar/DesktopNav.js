// child components
import NavButtonContainer from "./NavButtonContainer";
import DesktopLogo from "./DesktopLogo";


function DesktopNav(){
    return(
        <nav className="hidden md:block bg-transparent px-3 py-2 fixed w-full top-left-0 z-50 rounded-3xl blur-effect">
            <div className="container mx-auto justify-between flex flex-wrap items-center">
                <DesktopLogo />
                <div className="hidden md:block">
                    <NavButtonContainer />
                </div>
            </div>
        </nav>
    );
}

export default DesktopNav;