// images
import Image from "next/image";
import codeLogo from "../../../public/icons/code-solid.svg";


function Logo(){
    return (
        <div className="pt-3 z-0 pl-6">
            <h1 className="font-robotoMonoBold text-violet-600 text-2xl inline-block">DX</h1>
            <Image src={codeLogo} alt="code-logo" className="filter-violet-600 inline-block ml-2 mb-2 w-7"/>
        </div>
    );
}

export default Logo;
