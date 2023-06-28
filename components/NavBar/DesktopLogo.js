// images
import Image from "next/image";
import codeLogo from "../../public/icons/code-solid.svg";


function DesktopLogo(){
    return (
        <div className="z-0 pl-6">
            <h1 className="font-ubuntuMedium text-purple-600 purple-glow name-gradient text-[3.25vh] inline-block pr-2">Daniel Xu</h1>
            <Image src={codeLogo} alt="code-logo" className="filter-purple-800 inline-block ml-2 mb-2 w-7"/>
        </div>
    );
}

export default DesktopLogo;
