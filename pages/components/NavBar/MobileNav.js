// React
import { useState } from "react";

// child components
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import React from "react";

function MobileNav(){

    const [click, setClick] = useState(false);

    return(
        <nav className="w-screen bg-black px-3 py-3 fixed md:hidden">
            <div className="sm:w-screen mx-auto justify-between flex flex-wrap items-center">
                <Logo />
                <MenuButton click={click} setClick={setClick} />
                <Menu click={click} setClick={setClick} />
            </div>
        </nav>
    );
}

export default MobileNav;