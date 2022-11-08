// images
import Image from "next/image";
import codeLogo from "../../../public/icons/code-solid.svg";


function Logo(){
    return (
        <div>
            <div className="sm:pl-4">
                <h1 className="font-robotoMonoBold text-violet-500 text-2xl inline-block">DX</h1>
                <Image src={codeLogo} alt="code-logo" className="filter-violet-500 inline-block ml-2 pb-2 w-7"/>
            </div>
        </div>
        
    );
}

export default Logo;
