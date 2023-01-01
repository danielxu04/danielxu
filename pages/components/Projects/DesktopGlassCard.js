import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, } from 'react';

function DesktopGlassCard(props){
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        const executeTilt = async () => {
            VanillaTilt.init(tilt.current, options);
        };
        executeTilt();
    }, []);


    return (
        <a href={props.linkTo}>
            <div ref={tilt} {...rest} className="glass-container pb-[2vh] md:py-0 md:px-[2vw]">
                <div className="glass-card h-[40vh] md:w-[20vw] md:h-[46vh] lg:pt-[9vh]">
                    <div className=" text-white">
                        <div className="glass-content lg:mb-1">
                            <h2 className="font-montserratBold">{props.tempNum}</h2>
                            <h3 className="font-montserratRegular">{props.title}</h3>
                            <p className="font-montserratRegular pt-1 pb-1">{props.description}</p>
                            <hr className="relative mt-6 mb-0 w-[5vw] m-auto opacity-20 border-[0.75px]"></hr>
                            <div className="text-center languages p-0 m-0">
                                <p className="font-montserratRegular relative lg:pt-5 px-6">{props.lf}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </a>
    );
}

export default DesktopGlassCard;