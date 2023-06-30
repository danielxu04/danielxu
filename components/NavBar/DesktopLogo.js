// images
import Image from "next/image";
import codeLogo from "../../public/icons/code-solid.svg";

// dependencies
import { useContext } from 'react';
import { LightModeContext } from "../../contexts/LightMode";

function DesktopLogo(){

    const lightModeState = useContext(LightModeContext);

    return (
        <div className="z-0 pl-6">
            <h1 className={`font-ubuntuMedium name-gradient text-[3.25vh] inline-block pr-2 transition-15
                ${lightModeState.isLightMode === "light" ? 'purple-glow text-purple-600' : 'light-purple-glow text-fuchsia-600'}`}>Daniel Xu</h1>
            <Image src={codeLogo} alt="code-logo" className={`inline-block ml-2 mb-2 w-7 transition-15
                ${lightModeState.isLightMode === "light" ? 'filter-purple-800' : 'filter-fuchsia-600'}`}/>
        </div>
    );
}

export default DesktopLogo;
