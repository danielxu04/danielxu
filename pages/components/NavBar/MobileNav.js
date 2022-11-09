// child components
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

function MobileNav(){
    return(
        <nav className="sm:w-screen bg-black px-3 py-3">
            <div className="sm:w-screen md:container mx-auto justify-between flex flex-wrap items-center">
                <Logo />
                <MenuButton />
                <Menu />
            </div>
        </nav>
    );
}

export default MobileNav;