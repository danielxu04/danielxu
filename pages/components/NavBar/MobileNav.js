// React
import { useState } from "react";

// child components
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MobileLogo from "./MobileLogo";
import React from "react";

function MobileNav(){

    const [click, setClick] = useState(false);

    return(
        <nav className="w-screen bg-transparent px-3 py-2 fixed z-50 rounded-3xl blur-effect md:hidden">
            <div className="sm:w-screen mx-auto justify-between flex flex-wrap items-center">
                <MobileLogo />
                <MenuButton click={click} setClick={setClick} />
                <Menu click={click} setClick={setClick} />
            </div>
        </nav>
    );
}

export default MobileNav;