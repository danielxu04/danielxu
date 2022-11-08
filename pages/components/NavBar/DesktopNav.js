// child components
import NavButtonContainer from "./NavButtonContainer";
import Logo from "./Logo";


function DesktopNav(){
    return(
        <nav className="bg-black px-3 py-3">
            <div className="sm:w-screen md:container mx-auto justify-between flex flex-wrap items-center">
                <Logo />
                <div className="hidden md:block">
                    <NavButtonContainer />
                </div>
            </div>
        </nav>
    );
}

export default DesktopNav;