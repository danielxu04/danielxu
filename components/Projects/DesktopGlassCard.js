import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, useContext } from 'react';
import { LightModeContext } from '../../contexts/LightMode';

function DesktopGlassCard(props){

    const lightModeState = useContext(LightModeContext);
    const { options, ...rest } = props;
    const tilt = useRef(null);
    
    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <a href={props.linkTo} target="_blank" rel="noreferrer">
            <div ref={tilt} {...rest} className={`glass-container pb-[2vh] md:py-0 2xl:px-[2vw]`}>
                <div className={`h-[40vh] xl:h-[70vh] xl:w-[26vw] xl:pt-[14vh] 2xl:h-[50vh] 2xl:w-[23vw] 2xl:pt-[10vh] 3xl:pt-[9vh] 3xl:h-[47.5vh] 3xl:w-[20vw]
                ${lightModeState.isLightMode === 'light' ? 'glass-card' : 'light-glass-card'}`}>
                    <div className="text-white">
                        <div className="glass-content lg:mb-1">
                            <h2 className="font-montserratBold">{props.tempNum}</h2>
                            <h3 className="font-ubuntuRegular">{props.title}</h3>
                            <p className="font-montserratRegular pt-1 pb-1">{props.description}</p>
                            <hr className={`relative mt-6 mb-0 w-[5vw] m-auto rounded-md border-[0.75px]
                                ${lightModeState.isLightMode === 'light' ? 'bg-slate-200 opacity-20' : 'border-zinc-400 opacity-50'}`}></hr>
                            <div className="text-center languages p-0 m-0">
                                <p className="font-montserratRegular text-[0.3vw] relative lg:pt-5 px-6">{props.lf}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default DesktopGlassCard;