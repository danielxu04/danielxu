import { useContext } from 'react';
import { LightModeContext } from '../../contexts/LightMode';
import FooterIcons from './FooterIcons';

function FooterSection(){

    const lightModeState = useContext(LightModeContext);

    return (
        <div className="bg-transparent pt-10 2xs:pt-3 py-3 flex flex-col xl:block">
            <div className="flex justify-center pt-2 xl:hidden">
                <FooterIcons />
            </div>
            <div className="flex justify-center xl:inline-block xl:text-right xl:w-[55%] 2xl:w-[52.5%]">
                <p className={`text-[0.65rem] 2xs:text-sm font-montserratRegular xl:pl-[23vw] transition-075
                ${lightModeState.isLightMode === 'light' ? 'text-purple-600 lighter-purple-glow' : 'text-fuchsia-800 light-contact-glow'}`}>
                    Created and designed by Daniel Xu, 2023.
                </p>
            </div>
            <div className="hidden justify-center pt-2 xl:pl-[1.5vw] xl:inline-block xl:text-left xl:w-[45%] 2xl:w-[47.5%]">
                <FooterIcons />
            </div>
        </div>
    );
}

export default FooterSection;