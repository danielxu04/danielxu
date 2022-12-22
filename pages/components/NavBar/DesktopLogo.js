// images
import Image from "next/image";
import codeLogo from "../../../public/icons/code-solid.svg";


function DesktopLogo(){
    return (
        <div className="pt-3 z-0 pl-6">
            <h1 className="font-robotoMonoBold text-purple-800 purple-glow text-2xl inline-block">Daniel Xu</h1>
            <Image src={codeLogo} alt="code-logo" className="filter-purple-800 inline-block ml-2 mb-2 w-7"/>
        </div>
    );
}

export default DesktopLogo;
